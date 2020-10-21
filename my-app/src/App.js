import React, { useState } from 'react';
import './styles/App.css';
import Portfolio from './components/portfolio';
import Offer from './components/offer';
import Contact from './components/contactme';
import LeftNavigation from './components/leftnavigation'
import  './utils/portfolio-contents.json'

function App() {

  const [showHome, setShowHome] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showOffer, setShowOffer] = useState(false);

  const hideAllSections = () => {
    setShowHome(false);
    setShowOffer(false);
    setShowPortfolio(false);
    setShowContact(false);

  }


  const showSections = (sectionName) => {

    hideAllSections();
    switch (sectionName) {

      case "Home":
        setShowHome(true);
        break;
      case "Portfolio":
        setShowPortfolio(true);
        break;
      case "Offer":
        setShowOffer(true);
        break;
      case "Contact":
        setShowContact(true);
        break;

    }




  }
  return (
    <div className="App">
      <LeftNavigation showSections={showSections}  ></LeftNavigation>
      {
        showHome ?
          <div>
            <div className="App-HomePage-Name" >
              Hi I am Sagar
             </div>
            <div className="App-HomePage-Desc" >
              a software engineer specialized in front-end and back-end development
               </div>
            <div className="App-HomePage-logos" >
              <img src={require("./images/Azure-logo.png")}  ></img>
              <img src={require("./images/cosmos-logo.svg")}  ></img>
              <img src={require("./images/react-logo.svg")}  ></img>
              <img src={require("./images/sharepoint-logo.svg")}  ></img>
            </div>
          </div> : null
      }
      {showPortfolio ?
        <div>

          <Portfolio Title="my god" Stack={[]} />

        </div> : null
      }
      {showOffer ?
        <div>
          <Offer />
        </div> : null
      }
      {showContact ?
        <div>
          <Contact />
        </div> : null
      }
    </div>

  );
}

export default App;
