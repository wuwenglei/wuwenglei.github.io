import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import airplaneSrc from "./images/airplane.png";
import { useState } from "react";
import { Link } from 'react-router-dom';
import stepFinishSrc from "./images/step-finish.png";
import stepNowSrc from "./images/step-now.png";
import stepFutureSrc from "./images/step-future.png";
import stepArrowSrc from "./images/arrow.png";
import { Spinner } from 'react-bootstrap';
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";


const FlightDetails = () => {
    
    const { id } = useParams();
    const { data: flight, error, isPending } = useFetch('http://localhost:8000/flights/' + id);
    const history = useHistory();
    const [cabin, setCabin] = useState(null);
    const [seat, setSeat] = useState("No Preference");
    var flightId = null;
    var departureCity = null;
    var arrivalCity = null;
    var departureTime = null;
    var arrivalTime = null;
    var planeType = null;
    var price1 = null;
    var price2 = null;
    var price3 = null;
    var price4 = null;
    var passData = null;
    if (flight) {
        flightId = flight.id;
        departureCity = flight.departureCity;
        arrivalCity = flight.arrivalCity;
        departureTime = flight.departureTime;
        arrivalTime = flight.arrivalTime;
        planeType = flight.planeType;
        price1 = flight.prices.firstClass;
        price2 = flight.prices.businessClass;
        price3 = flight.prices.premiumEconomy;
        price4 = flight.prices.economy;
        passData = {flightId, departureCity, arrivalCity, departureTime, arrivalTime, planeType, price1, price2, price3, price4, cabin, seat};
    }

    const renderBackTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Go back to the previous step.
        </Tooltip>
    );
    const renderNextTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Go to the next step.
    </Tooltip>
    );

    const handleSubmit = (e) => {
      e.preventDefault();
    }

    return (
        <div className="flight-details">
            <h2>Book a Flight</h2>
            <div className="steps">
                    <div className="step-div">
                        <img className="step-picture" src={stepFinishSrc} alt="Step finish." />
                        <p className="step-text">Travel Info</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepFinishSrc} alt="Step finish." />
                        <p className="step-text">Select a Flight</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepNowSrc} alt="Step now." />
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
            { isPending && <div><Spinner animation="border" variant="warning" size="sm" /> Loading...</div> }
            { error && <div>{ error }</div> }
            { flight && 
                (<div className="flight-info">
                    <h3>{ flight.id }</h3>
                    <p className="airplane">{flight.departureCity} <img src={airplaneSrc} alt="Airplane icon." /> {flight.arrivalCity}</p>
                    <p>{flight.departureTime} {flight.planeType} {flight.arrivalTime}</p>
                </div>)
            }
            { flight && 
                (<div className="seatPreferenceForm">
                    <form onSubmit={handleSubmit}>
                        <div className="cabinSelect">
                            <p>Please select your preferred cabin:</p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredCabin" value="First Class" required onChange={() => setCabin('First Class')} /> First Class ${price1} </label></p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredCabin" value="Business Class" required onChange={() => setCabin('Business Class')} /> Business Class ${price2} </label></p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredCabin" value="Premium Economy" required onChange={() => setCabin('Premium Economy')} /> Premium Economy ${price3} </label></p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredCabin" value="Economy" required onChange={() => setCabin('Economy')} /> Economy ${price4} </label></p>
                        </div>
                        <div className="seatSelect">
                            <p>Please select your preferred seat position:</p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredSeat" value="No Preference" checked="checked" required onChange={() => setSeat('No Preference')} /> No Preference </label></p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredSeat" value="Window" required onChange={() => setSeat('Window')} /> Window </label></p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredSeat" value="Aisle" required onChange={() => setSeat('Aisle')} /> Aisle </label></p>
                            <p><label className="hoverChange"> <input type="radio" name="preferredSeat" value="Middle" required onChange={() => setSeat('Middle')} /> Middle </label></p>
                        </div>
                        <p id="noCabinError"></p>
                        <OverlayTrigger placement="left" delay={{ show: 50, hide: 50 }} overlay={renderNextTooltip}>
                            <button className="next-button"><Link to={{
                                pathname: "/additionalservices",
                                state: passData
                            }}  onClick={(e) => {if (! cabin) {e.preventDefault()}; document.getElementById("noCabinError").innerHTML="Warning: please choose you preferred cabin!"}}>Next</Link></button>
                        </OverlayTrigger>
                    </form>
                </div>)
            }
            <p><OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderBackTooltip}>
                <button className="back-button" onClick={() => {window.history.go(-1);}}>Back</button>
            </OverlayTrigger></p>
        </div>
    );
}
 
export default FlightDetails;