import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import AboutUs from './AboutUs';
import TravelInfo from './TravelInfo';
import CustomerSupport from './CustomerSupport';
import SignIn from './SignIn';
import FlightList from './FlightList';
import FlightDetails from './FlightDetails';
import AdditionalServices from './AdditionalServices';
import Payment from './Payment';
import Help from './Help';
import HomeFrench from './HomeFrench';
import NavbarFrench from './NavbarFrench';

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/">
              <div className="App">
                <Navbar />
                <div className="content">
                  <Home />
                </div>
              </div>
            </Route>
            <Route path="/homefrench">
              <div className="App">
                <NavbarFrench />
                <div className="content">
                  <HomeFrench />
                </div>
              </div>
            </Route>
            <Route path="/flightlist">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <FlightList />
                  </div>
              </div>
            </Route>
            <Route path="/flights/:id">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <FlightDetails />
                  </div>
              </div>
            </Route>
            <Route path="/additionalservices">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <AdditionalServices />
                  </div>
              </div>
            </Route>
            <Route path="/payment">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <Payment />
                  </div>
              </div>
            </Route>
            <Route path="/travelinfo">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <TravelInfo />
                  </div>
              </div>
            </Route>
            <Route path="/aboutus">
              <div className="App">
                  <Navbar />
                  <div className="content">
                   <AboutUs />
                  </div>
              </div>
            </Route>
            <Route path="/customersupport">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <CustomerSupport />
                  </div>
              </div>
            </Route>
            <Route path="/signin">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <SignIn />
                  </div>
              </div>
            </Route>
            <Route path="/help">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <Help />
                  </div>
              </div>
            </Route>
            <Route path="*">
              <div className="App">
                  <Navbar />
                  <div className="content">
                    <NotFound />
                  </div>
              </div>
            </Route>
          </Switch>
    </Router>
  );
}

export default App;
