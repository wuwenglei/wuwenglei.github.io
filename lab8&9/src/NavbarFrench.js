import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import bookingSrc from "./images/booking.png";
import travelSrc from "./images/travel.png";
import aboutSrc from "./images/about.png";
import supportSrc from "./images/support.png";

const NavbarFrench = () => {
  return (
    <nav className="navbar">
      <h2><img src={logo} alt="Golden cloud logo." id="logo" />Compagnie aérienne Golden Cloud</h2>
      <div className="links">
        <Link to="/homefrench"><img src={bookingSrc} alt="Booking icon." class="navbarIcon" /> Réservation</Link>
        <Link to="/travelinfo"><img src={travelSrc} alt="Travel icon." class="navbarIcon" /> Informations de voyage</Link>
        <Link to="/aboutus"><img src={aboutSrc} alt="About icon." class="navbarIcon" /> À propos de l'icône.À propos des États-Unis</Link>
        <Link to="/customersupport"><img src={supportSrc} alt="Support icon." class="navbarIcon" /> Service client</Link>
        <Link to="/signin" style={{ 
          color: 'white', 
          backgroundColor: '#fa9600',
          borderRadius: '8px' 
        }}>Se connecter</Link>
      </div>
    </nav>
  );
}
 
export default NavbarFrench;