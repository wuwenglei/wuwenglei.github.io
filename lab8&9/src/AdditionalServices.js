import {useLocation} from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';
import airplaneSrc from "./images/airplane.png";
import stepFinishSrc from "./images/step-finish.png";
import stepNowSrc from "./images/step-now.png";
import stepFutureSrc from "./images/step-future.png";
import stepArrowSrc from "./images/arrow.png";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";


const AdditionalServices = (props) => {
    const [passData, setPassData] = useState(null);
    const { state } = useLocation();
    const cabin = state.cabin;
    const seat = state.seat;
    const additionalServices = [false,false,false,false];
    const flightId = state.flightId;
    const departureCity = state.departureCity;
    const arrivalCity = state.arrivalCity;
    const departureTime = state.departureTime;
    const arrivalTime = state.arrivalTime;
    const planeType = state.planeType;
    const price1 = state.price1;
    const price2 = state.price2;
    const price3 = state.price3;
    const price4 = state.price4;
    const passNewData = {flightId, departureCity, arrivalCity, departureTime, arrivalTime, planeType, price1, price2, price3, price4, cabin, seat, additionalServices};
    const updateServices = () => {
        var serviceCheckbox = document.getElementsByName("additionalServiceWanted");
        for (let i=0; i<serviceCheckbox.length; i++) {
            if (serviceCheckbox[i].checked) {
                additionalServices[i] = true;
            } else {
                additionalServices[i] = false;
            }
        }
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
        <div className="additionalServicesForm">
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
                        <img className="step-picture" src={stepFinishSrc} alt="Step finish." />
                        <p className="step-text">Select Cabin&amp;Seat</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepNowSrc} alt="Step now." />
                        <p className="step-text">Additional Services</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepFutureSrc} alt="Step future." />
                        <p className="step-text">Payment</p>
                    </div>
            </div>
            <div className="flight-info">
                    <h3>{ flightId }</h3>
                    <p className="airplane">{departureCity} <img src={airplaneSrc} alt="Airplane icon." /> {arrivalCity}</p>
                    <p>{departureTime} {planeType} {arrivalTime}</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="additionalServicesSelect">
                    <p>Please select any additional services you want:</p>
                    <p><label className="hoverChange"><input type="checkbox" name="additionalServiceWanted" value="VIP Lounge" onChange={updateServices} />VIP Lounge (+$50)</label></p>
                    <p><label className="hoverChange"><input type="checkbox" name="additionalServiceWanted" value="Priority Boarding" onChange={updateServices} />Priority Boarding (+$30)</label></p>
                    <p><label className="hoverChange"><input type="checkbox" name="additionalServiceWanted" value="Priority Security Check" onChange={updateServices} />Priority Security Check (+$20)</label></p>
                    <p><label className="hoverChange"><input type="checkbox" name="additionalServiceWanted" value="Personal Assistant" onChange={updateServices} />Personal Assistant (+$500)</label></p>
                </div>
                <OverlayTrigger placement="left" delay={{ show: 50, hide: 50 }} overlay={renderNextTooltip}>
                    <button className="next-button"><Link to={{
                        pathname: "/payment",
                        newState: passNewData
                    }}>Next</Link></button>
                </OverlayTrigger>
            </form>
            <p><OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderBackTooltip}>
                <button className="back-button" onClick={() => {window.history.go(-1);}}>Back</button>
            </OverlayTrigger></p>
        </div>
     );
}
 
export default AdditionalServices;