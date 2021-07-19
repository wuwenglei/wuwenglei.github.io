import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import airlineIntroVideoSrc from "./videos/airline-intro.mp4";

const AboutUs = () => {
    return ( 
        <div className="aboutUs">
            <h2>About Us</h2>
            <div className="aboutUsAccordion">
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            About our airline
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <video width="80%" height="80%" controls>
                                <source src={airlineIntroVideoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            About our services
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <article>
                                    <div className="intro-vip-lounge">
                                        <h5>VIP Lounge</h5>
                                        <p>Our VIP Lounges are located in 20 airports across Canada, the United States and Europe. They feature all the services and amenities you need to be – and perform – at your peak.</p>
                                        <p>Price: $50 / Entry</p>
                                    </div>
                                    <div className="intro-priority-boarding">
                                        <h5>Priority Boarding</h5>
                                        <p>Want to board in advance? Choose this service will allow you to first board the plane.</p>
                                        <p>Price: $30 / Once</p>
                                    </div>
                                    <div className="intro-priority-boarding">
                                        <h5>Priority Security Check</h5>
                                        <p>By choosing this service, you will have access to our VIP security check room.</p>
                                        <p>Price: $20 / Once</p>
                                    </div>
                                    <div className="intro-priority-boarding">
                                        <h5>Personal Assistant</h5>
                                        <p>Available for your entire journey! Our professional personal assistants will provide you with dedicated care: pick up you at your home and the airports, help you take your luggages, etc.</p>
                                        <p>Price: $500 / Flight</p>
                                    </div>
                                </article>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            About our planes
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <div className="Boeing">
                                    <h5>Boeing</h5>
                                    <p><a href="https://en.wikipedia.org/wiki/Boeing_747">Boeing 747</a></p>
                                    <p><a href="https://en.wikipedia.org/wiki/Boeing_777">Boeing 777</a></p>
                                    <p><a href="https://en.wikipedia.org/wiki/Boeing_787">Boeing 787</a></p>
                                </div>
                                <div className="Airbus">
                                    <h5>Airbus</h5>
                                    <p><a href="https://en.wikipedia.org/wiki/Airbus_A320_family">Airbus A320</a></p>
                                    <p><a href="https://en.wikipedia.org/wiki/Airbus_A380">Airbus A380</a></p>
                                </div>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        </div>
     );
}
 
export default AboutUs;