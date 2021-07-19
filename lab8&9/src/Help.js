import help1Src from "./images/help1.png";
import help2Src from "./images/help2.png";
import help3Src from "./images/help3.png";
import help4Src from "./images/help4.png";
import help5Src from "./images/help5.png";
import help6Src from "./images/help6.png";
import help7Src from "./images/help7.png";
import help8Src from "./images/help8.png";
import help9Src from "./images/help9.png";
import help10Src from "./images/help10.png";
import help11Src from "./images/help11.png";
import help12Src from "./images/help12.png";
import help13Src from "./images/help13.png";
import help14Src from "./images/help14.png";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";


const Help = () => {
    const renderBackTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Go back to the previous page.
        </Tooltip>
    );
    return ( 
        <div className="help">
            <p><OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderBackTooltip}>
                <button id="help-back-button-top" onClick={() => {window.history.go(-1);}}>Back</button>
            </OverlayTrigger></p>
            <article>
                <h2>Site Guidance</h2>
                <p id="helpNote">Note: last updated on July 18, 2021. The content of our site is subject to change, but the main structure will not change.</p>
                <br />
                <h3>Booking a Flight Ticket</h3>
                <br />
                <p>To book a flight ticket, click &quot;Booking&quot; on the navbar.</p>
                <img src={help1Src} alt="Help picture 1." />
                <p>Enter your booking details, and click &quot;Find Flights&quot;.</p>
                <img src={help2Src} alt="Help picture 2." />
                <p>Select the flight you want to book.</p>
                <img src={help3Src} alt="Help picture 3." />
                <p>Select your preferred cabin and seat, and then click &quot;Next&quot;</p>
                <img src={help4Src} alt="Help picture 4." />
                <p>Select any additional services you want, and then click &quot;Next&quot;</p>
                <img src={help5Src} alt="Help picture 5." />
                <p>Enter your credit card information, and then click &quot;Confirm Payment&quot;</p>
                <img src={help6Src} alt="Help picture 6." />
                <p>Once your booking is placed successfully, the page will display the success message and your booking details.</p>
                <img src={help7Src} alt="Help picture 7." />
                <p>To obtain some information of your destination, click &quot;Travel Info&quot; on the navbar.</p>
                <img src={help8Src} alt="Help picture 8." />
                <p>Choose the location listed in the dropdown, or enter a location in the search bar.</p>
                <img src={help9Src} alt="Help picture 9." />
                <p>To obtain some information of our airline, click &quot;About US&quot; on the navbar.</p>
                <img src={help10Src} alt="Help picture 10." />
                <p>Click on the dropdown according to what you want to know: our airline, our services, or our planes.</p>
                <img src={help11Src} alt="Help picture 11." />
                <p>To have cutomer support, click &quot;Customer Support&quot; on the navbar.</p>
                <img src={help12Src} alt="Help picture 12." />
                <p>We have listed some frequent questions asked by our clients and their corresponding answers.</p>
                <img src={help13Src} alt="Help picture 13." />
                <p>To provide us with your feedback or complaints about our site, please click &quot;Site Feedback&quot; button. </p>
                <p>If you want to ask us questions online, please click &quot;Online Chat&quot; button. </p>
                <img src={help14Src} alt="Help picture 14." />
            </article>
            <p><OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderBackTooltip}>
                <button id="help-back-button-bottom" onClick={() => {window.history.go(-1);}}>Back</button>
            </OverlayTrigger></p>
        </div>
     );
}
 
export default Help;