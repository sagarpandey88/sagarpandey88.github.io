import React from "react";
import styles from "./IntroSection.module.scss";
import { scrollToElement } from "../../common/helpers";
import codeThinkingImg from "../../images/codeThinking.svg";
import downArrow from "../../images/downArrow.png";
import DownArrow from "../Home/DownArrow";

const IntroSection = () => {
  return (
    <div className={styles.topSection} id="intro">
      <div className={styles.topSectionHello}>
        <div>
          <h2>Hi, I am a Full Stack Developer and Consultant</h2>
        </div>
        <div>
          <img src={codeThinkingImg} alt="Img" />
        </div>
      </div>
      <DownArrow navigateToSectionId="exp"></DownArrow>
    
    </div>
  );
};

export default IntroSection;
