import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const TravelInfo = () => {
    const [searchHref, setSearchHref] = useState("#");

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click this button to search on Google.
        </Tooltip>
      );

    return ( 
        <div className="travelInfo">
            <h2>Travel Infomation</h2>
            <form>
                <input type="text" id="searchDestination" placeholder="Search a destination" list="searchDestinationList" onChange={(e) => setSearchHref("https://www.google.com/search?q="+e.target.value)}/>
                <datalist id="searchDestinationList">
                    <option value="Canada">Canada</option>
                    <option value="China">China</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Japan">Japan</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Singapore">Singapore</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                </datalist>
                <OverlayTrigger placement="top" delay={{ show: 50, hide: 50 }} overlay={renderTooltip}>
                    <button id="searchDestinationButton"><a href={searchHref}>Search</a></button>
                </OverlayTrigger>
            </form>

            <br />

            <div className="travelInfoAccordion">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            North America
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p><a href="https://en.wikipedia.org/wiki/Canada">Canada</a></p>
                                <p><a href="https://en.wikipedia.org/wiki/Mexico">Mexico</a></p>
                                <p><a href="https://en.wikipedia.org/wiki/United_States">USA</a></p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Asia
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <p><a href="https://en.wikipedia.org/wiki/China">China</a></p>
                                <p><a href="https://en.wikipedia.org/wiki/Japan">Japan</a></p>
                                <p><a href="https://en.wikipedia.org/wiki/Singapore">Singapore</a></p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Europe
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <p><a href="https://en.wikipedia.org/wiki/France">France</a></p>
                                <p><a href="https://en.wikipedia.org/wiki/Germany">Germany</a></p>
                                <p><a href="https://en.wikipedia.org/wiki/United_Kingdom">UK</a></p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
     );
}
 
export default TravelInfo;