import { useState } from "react";
import { Link } from 'react-router-dom';
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import airplaneTakeOffSrc from "./images/airplane-take-off.png";
import airplaneLandingSrc from "./images/airplane-landing.png";
import calendarSrc from "./images/calendar.png";


const HomeFrench = () => {
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const passData = {departureCity, arrivalCity};

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      En cliquant sur ce bouton, une liste de vols vous sera affichée !
    </Tooltip>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const changeLanguage = (e) => {
    if (e.target.value==="English") {
      window.location.assign('http://localhost:3000/');
    } else if (e.target.value==="Français") {
      window.location.assign('http://localhost:3000/homefrench');
    }
  }

  return (
    <div className="home">
      <h2>Réserver un vol</h2>
      <div className="search">
        <h4>Recherche de vols</h4>
        <form onSubmit={handleSubmit}>
          <p><label><img src={airplaneTakeOffSrc} alt="Airplane take off icon." className="searchIcon" /> De: </label>
          <input type="text" value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} list="departureCityList" required/>
          <datalist id="departureCityList">
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
            <option value="Vancouver">Vancouver</option>
          </datalist></p>
          <p><label><img src={airplaneLandingSrc} alt="Airplane landing icon." className="searchIcon" /> À: </label>
          <input type="text" value={arrivalCity} onChange={(e) => setArrivalCity(e.target.value)} list="arrivalCityList" required/>
          <datalist id="arrivalCityList">
            <option value="Ottawa">Ottawa</option>
            <option value="Toronto">Toronto</option>
            <option value="Vancouver">Vancouver</option>
          </datalist></p>
          <p><label><img src={calendarSrc} alt="Calendar icon." className="searchIcon" /> Date: </label>
          <input type="date" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} placeholder="YY/MM/DD" required/></p>
          <p id="searchError"></p>
          <p><OverlayTrigger placement="right" delay={{ show: 50, hide: 50 }} overlay={renderTooltip}>
            <button><Link to={{
              pathname: "/flightlist",
              state: passData
            }} onClick={(e) => {if (departureCity==='' || arrivalCity==='' || departureDate==='') {e.preventDefault()}; document.getElementById("searchError").innerHTML="Attention : veuillez remplir tous les champs de saisie !"}}>Trouver des vols</Link></button>
          </OverlayTrigger></p>
        </form>
      </div>
      <button id="helpButton"><Link to={"/help"}>Aider</Link></button>
      <div id="languageSelectionDiv">
        <select id="languageSelect" name="languageSelect" onChange={(e) => changeLanguage(e)}>
          <option value="English">English</option>
          <option value="Français" selected="selected">Français</option>
        </select>
      </div>
    </div>
  );
}
 
export default HomeFrench;
