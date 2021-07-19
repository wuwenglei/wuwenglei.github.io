import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import bookingSrc from "./images/booking.png";
import travelSrc from "./images/travel.png";
import aboutSrc from "./images/about.png";
import supportSrc from "./images/support.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1><img src={logo} alt="Golden cloud logo." id="logo" />Golden Cloud Airline</h1>
      <div className="links">
        <Link to="/"><img src={bookingSrc} alt="Booking icon." class="navbarIcon" /> Booking</Link>
        <Link to="/travelinfo"><img src={travelSrc} alt="Travel icon." class="navbarIcon" /> Travel Info</Link>
        <Link to="/aboutus"><img src={aboutSrc} alt="About icon." class="navbarIcon" /> About US</Link>
        <Link to="/customersupport"><img src={supportSrc} alt="Support icon." class="navbarIcon" /> Customer Support</Link>
        <Link to="/signin" style={{ 
          color: 'white', 
          backgroundColor: '#fa9600',
          borderRadius: '8px' 
        }}>Sign In</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;