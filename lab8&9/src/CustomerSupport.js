import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const CustomerSupport = () => {
    function Chat() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        const handleTextEnter = () => {
            document.getElementById("messages").value += document.getElementById("messageInput").value+"\n";
            document.getElementById("messageInput").value="";
        }

        const renderChatTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Click this button to open the chat box.
            </Tooltip>
        );

        return (
            <>
            <OverlayTrigger placement="top" delay={{ show: 50, hide: 50 }} overlay={renderChatTooltip}>
                <Button variant="warning" onClick={handleShow} id="onlineChatButton">
                    Online Chat
                </Button>
            </OverlayTrigger>

      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Online Chat</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <div className="chatarea">
              <form>
                <textarea name="messages" id="messages" cols="55" rows="10"></textarea>
                <input type="text" id="messageInput" placeholder="Enter your message here." size="40"/>
              </form>
              <button id="messageSend" onClick={handleTextEnter}>Send</button>
              </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
    }

    function Feedback() {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const renderFeedbackTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Click this button to open the feedback form.
            </Tooltip>
        );
      
        return (
          <>
            <OverlayTrigger placement="top" delay={{ show: 50, hide: 50 }} overlay={renderFeedbackTooltip}>
                <Button variant="warning" onClick={handleShow} id="feedbackButton">
                    Site Feedback
                </Button>
            </OverlayTrigger>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Site Feedback</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <form>
                  <p>Overall, you find our website:</p>
                  <p><label className="hoverChange"> <input type="radio" name="siteRating" value="Excellent" /> Excellent </label></p>
                  <p><label className="hoverChange"> <input type="radio" name="siteRating" value="Good" /> Good </label></p>
                  <p><label className="hoverChange"> <input type="radio" name="siteRating" value="Normal" /> Normal </label></p>
                  <p><label className="hoverChange"> <input type="radio" name="siteRating" value="Bad" /> Bad </label></p>
                  <p><label className="hoverChange"> <input type="radio" name="siteRating" value="Awful" /> Awful </label></p>
                  <br />
                  <p>Additional comments: </p>
                  <textarea name="additionalComments" id="additionalComments" cols="55" rows="10" placeholder="If you have any additional comments to our site, please write them here."></textarea>
                  </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Submit Feedback
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
    return ( 
        <div className="customerSupport">
            <h2>Customer Support</h2>
            <div className="frequentqaas">
                <h4>Frequent Q&amp;As</h4>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Can I get refund for a ticket I did not use?
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Yes, you can get refund for any unused ticket. However, you will be charged for some service fees. Please contact us by calling: (613)-123-4567.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Can I cancel my reservation?
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                Of course! Please prepare you booking details and contact us by calling: (613)-123-4567. 
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            Can I select a specific seat in advance?
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                Unfortunately, you cannot select a specific seat on our booking system. But you can do so by calling: (613)-123-4567.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            What are the restrictions for my luggages?
                        </Accordion.Toggle>

                        <Accordion.Collapse eventKey="3">
                            <Card.Body>
                                Each passenger is allowed to board with one 7KG item, and check two 23KG items.
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="sitefeedback">
                <Feedback />
            </div>
            <div className="onlineChat">
                <Chat />
            </div>
        </div>
     );
}
 
export default CustomerSupport;