import * as React from "react";
import styles from "./Home.module.scss";
import Header from "../Header/Header";
import MyExperience from "../MyExperience/MyExperience";
import codeThinkingImg from "../../images/codeThinking.svg";
import { DeviceType } from "../../model/PortfolioModel";

const Home = (props: HomeProps) => {
  return (
    <div className={styles.gridContainer}>
      <Header deviceType={props.deviceType}></Header>
      <div style={{ margin: "0 5%" }}> 
        <div className={styles.cards + " "+  styles.headSection}>
          <div>
            <h2>
              Hi,
              <p> I am a full stack developer and consultant</p>
            </h2>
          </div>
          <div style={{ textAlign: "center" }}>
            <img className={styles.headSectionImg}  src={codeThinkingImg}></img>
          </div>
        </div>
        <div>
          <h2>My Experience</h2>
          <div>
            <MyExperience></MyExperience>
          </div>
        </div>
        <div>
          <div>My Work</div>
          <div>[GIT Cards]</div>
        </div>
        <div>
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
