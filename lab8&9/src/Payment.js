import {useLocation} from 'react-router-dom';
import { useState } from "react";
import { Link } from 'react-router-dom';
import airplaneSrc from "./images/airplane.png";
import visaSrc from "./images/icons8-visa-50.png";
import mastercardSrc from "./images/icons8-mastercard-50.png";
import stepFinishSrc from "./images/step-finish.png";
import stepNowSrc from "./images/step-now.png";
import stepFutureSrc from "./images/step-future.png";
import stepArrowSrc from "./images/arrow.png";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const Payment = (props) => {
    const [passNewData, setPassNewData] = useState(null);
    const { newState } = useLocation();
    const cabin = newState.cabin;
    const seat = newState.seat;
    const additionalServices = newState.additionalServices;
    const flightId = newState.flightId;
    const departureCity = newState.departureCity;
    const arrivalCity = newState.arrivalCity;
    const departureTime = newState.departureTime;
    const arrivalTime = newState.arrivalTime;
    const planeType = newState.planeType;
    const price1 = newState.price1;
    const price2 = newState.price2;
    const price3 = newState.price3;
    const price4 = newState.price4;

    const renderBackTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Go back to the previous step.
        </Tooltip>
    );
    const renderNextTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Click here to complete your booking.
    </Tooltip>
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (flightId && cabin && seat) {
            window.alert("Your booking was made successful! \n Flight number: "+flightId+" \n Cabin: "+cabin+" \n Seat preference: "+seat+" \n Enjoy your trip!");
            window.location.assign('http://localhost:3000/');
        }
      }
    const calculateTotalPrice = () => {
        var total = 0;
        if (cabin === "First Class") {
            total+=price1;
        } else if (cabin === "Business Class") {
            total+=price2;
        } else if (cabin === "Premium Economy") {
            total+=price3;
        } else if (cabin === "Economy") {
            total+=price4;
        } else {
            total=NaN;
        }
        if (additionalServices[0]) {total+=50;}
        if (additionalServices[1]) {total+=30;}
        if (additionalServices[2]) {total+=20;}
        if (additionalServices[3]) {total+=500;}
        return (<span>{total}</span>);
    }
    return ( 
        <div className="payment">
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
                        <img className="step-picture" src={stepFinishSrc} alt="Step finish." />
                        <p className="step-text">Additional Services</p>
                    </div>
                    <img className="step-arrow" src={stepArrowSrc} alt="Step arrow." />
                    <div className="step-div">
                        <img className="step-picture" src={stepNowSrc} alt="Step now." />
                        <p className="step-text">Payment</p>
                    </div>
            </div>
            <div className="paymentForm">
                <div className="flight-info">
                        <h3>{ flightId }</h3>
                        <p className="airplane">{departureCity} <img src={airplaneSrc} alt="Airplane icon." /> {arrivalCity}</p>
                        <p>{departureTime} {planeType} {arrivalTime}</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <p>You are going to pay: ${calculateTotalPrice()}</p>
                    <p>Credit Card<img src={visaSrc} alt="Payment icon" /><img src={mastercardSrc} alt="Payment icon" /></p>
                    <p>
                        <input type="text" name="cardholdername" placeholder="Cardholder's Name" required/>
                        <input type="text" name="cardnumber" placeholder="Card Number" id = "card" required/>
                        <input type="text" name="cvv" placeholder="CVV" id = "cvv" required/>
                        <input type="month" name="validuntil" placeholder="MM/DD" required/>
                    </p>
                    <OverlayTrigger placement="left" delay={{ show: 50, hide: 50 }} overlay={renderNextTooltip}>
                        <button className="confirm-button">Confirm Payment</button>
                    </OverlayTrigger>
                </form>
            </div>
            <p><OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderBackTooltip}>
                <button className="back-button" onClick={() => {window.history.go(-1);}}>Back</button>
            </OverlayTrigger></p>
        </div>
     );
}
 
export default Payment;