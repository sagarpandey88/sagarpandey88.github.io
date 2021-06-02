import React, { useState } from 'react';
import './styles/App.css';
import Portfolio from './components/portfolio';
import Offer from './components/offer';
import Contact from './components/contactme';
import LeftNavigation from './components/leftnavigation'
import HomePage from './components/home'
import './utils/portfolio-contents.json'
import { AnimationClassNames } from '@fluentui/react'
import 'office-ui-fabric-react/dist/css/fabric.css';



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
       <div className="ms-Grid" dir="ltr">
          <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm6 ms-xl6">A</div>
              <div className="ms-Grid-col ms-sm6 ms-xl6">B</div>
          </div>
      </div>
      <LeftNavigation showSections={showSections}  ></LeftNavigation>
      {
        showHome ?
          <HomePage></HomePage> : null
      }

      {showPortfolio ?
        <div className={showPortfolio ? AnimationClassNames.slideLeftIn400 : "hiddenCard"} >

          <Portfolio Title="my god" Stack={[]} />

        </div>
        : null
      }

      {showOffer ?
        <div className={showOffer ? AnimationClassNames.slideLeftIn400 : "hiddenCard"} >
          <Offer />
        </div>
        : null
      }

      {showContact ?
        <div className={showContact ? AnimationClassNames.slideLeftIn400 : "hiddenCard"} >
          <Contact />
        </div>
        : null
      }
    </div>

  );
}

export default App;
