import * as React from "react";
import styles from "./Home.module.scss";
import Header from "../Header/Header";
import MyExperience from "../MyExperience/MyExperience";
import MyWork from "../MyWork/MyWork";

import { DeviceType } from "../../model/PortfolioModel";
import IntroSection from "../IntroSection/IntroSection";
import MyCredentials from "../MyCredentials/MyCredentials";

const Home = (props: HomeProps) => {
  
  return (
    <div className={styles.bodyWrapper}>
      <Header deviceType={props.deviceType}></Header>
      <div className={styles.contents}>
        <IntroSection></IntroSection>
        <MyExperience></MyExperience>
        <MyWork></MyWork>
        <MyCredentials></MyCredentials>
        <div
          id="contact"
          style={{
            marginTop: "20px",
            paddingTop: "4rem",
            height: "94vh",
            margin: "5rem 1rem",
            scrollSnapAlign: "start",
          }}
        >
          <div>
            <h2>Contact Me</h2>
          </div>
          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSc0xtYuCBruOO61lDWpJfqRW2lxEIdySyROtLAHsM41bO88KA/viewform?embedded=true"
              width="95%"
              height="673"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        All Rights Resevered      
      </div>
    </div>
  );
};

export default Home;

interface HomeProps {
  deviceType: DeviceType;
}
