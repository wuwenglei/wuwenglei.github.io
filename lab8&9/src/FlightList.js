import { Link } from 'react-router-dom';
import useFetch from "./useFetch";
import {useLocation} from 'react-router-dom';
import { useState } from "react";
import airplaneSrc from "./images/airplane.png";
import stepFinishSrc from "./images/step-finish.png";
import stepNowSrc from "./images/step-now.png";
import stepFutureSrc from "./images/step-future.png";
import stepArrowSrc from "./images/arrow.png";
import { Spinner } from 'react-bootstrap';
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";



const FlightList = (props) => {
    const [passData, setPassData] = useState(null);
    const { state } = useLocation();
    const departureCity = state.departureCity;
    const arrivalCity = state.arrivalCity;
    const { error, isPending, data: flights } = useFetch('http://localhost:8000/flights');
    const renderBackTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Go back to the previous step.
        </Tooltip>
    );
    const renderNextTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click here to book this flight.
        </Tooltip>
    );
    if (flights && departureCity && arrivalCity) {
        return (
            <div className="flight-list">
                <h2>Book a Flight</h2>
                <div className="steps">
                    <div className="step-div">
                        <img className="step-picture" src={stepFinishSrc} alt="Step finish." />
                        <p className="step-text">Travel Info</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepNowSrc} alt="Step now." />
                        <p className="step-text">Select a Flight</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepFutureSrc} alt="Step future." />
                        <p className="step-text">Select Cabin&amp;Seat</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepFutureSrc} alt="Step future." />
                        <p className="step-text">Additional Services</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepFutureSrc} alt="Step future." />
                        <p className="step-text">Payment</p>
                    </div>
                </div>
                {flights.filter(function(flight) {return flight.arrivalCity.toLowerCase() === arrivalCity.toLowerCase() && flight.departureCity.toLowerCase() === departureCity.toLowerCase()}).map(flight => (
                <div className="flight-preview" key={flight.id} >
                    <OverlayTrigger placement="bottom" delay={{ show: 50, hide: 50 }} overlay={renderNextTooltip}>
                        <Link to={`/flights/${flight.id}`}>
                            <div className="flight-info">
                                <h3>{ flight.id }</h3>
                                <p className="airplane">{flight.departureCity} <img src={airplaneSrc} alt="Airplane icon." /> {flight.arrivalCity}</p>
                                <p>{flight.departureTime} {flight.planeType} {flight.arrivalTime}</p>
                            </div>
                        </Link>
                    </OverlayTrigger>
                  <br />
                </div>
                ))}
                <p><OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderBackTooltip}>
                    <button className="back-button" onClick={() => {window.history.go(-1);}}>Back</button>
                </OverlayTrigger></p>
            </div>
          );
    } else {
        return (
            <div className="flight-list">
                <h2>Book a Flight</h2>
                { error && <div>{ error }</div> }
                { isPending && <div><Spinner animation="border" variant="warning" size="sm" /> Loading...</div> }
                <br />
                <p><button className="back-button" onClick={() => {window.history.go(-1);}}>Back</button></p>
            </div>
        )
    }
  }
 
export default FlightList;

// arrivalCity === flight.arrivalCity && departureCity === flight.departureCity