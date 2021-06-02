import * as React from "react";
import styles from "./Home.module.scss";
import Header from "../Header/Header";
import codeThinkingImg from "../../images/codeThinking.svg";
import { DeviceType } from "../../model/PortfolioModel";

const Home = (props: HomeProps) => {
  return (
    <div className={styles.gridContainer}>
      <Header deviceType={props.deviceType}></Header>
      <div style={{ margin: "0 auto" }}>
        <div className={styles.cards}>
          <div>
            Hi, I am Sagar Pandey, I am a full stack developer and consultant
          </div>
          <div style={{ textAlign: "center" }}>
            <img style={{ width: "60%" }} src={codeThinkingImg}></img>
          </div>
        </div>
        <div className={styles.cards}>
          <div>My Experience</div>
          <div>[Stack Photos]</div>
        </div>
        <div className={styles.cards}>
          <div>My Work</div>
          <div>[GIT Cards]</div>
        </div>
        <div className={styles.cards}>
          <div>Contact Me</div>
          <div>[Contact Details]</div>
        </div>
      </div>
      <div className={styles.gridFooter}> Full Width Footer </div>
    </div>
  );
};

export default Home;

interface HomeProps {
  deviceType: DeviceType;
}
