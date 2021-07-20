import React from "react";
import styles from "./IntroSection.module.scss";
import codeThinkingImg from "../../images/codeThinking.svg";
import github from "../../images/github.svg";
import resume from "../../images/resume.svg";
import DownArrow from "../Home/DownArrow";
import * as config from "../../config/portfolio.config";

const IntroSection = () => {
  return (
    <div className={styles.topSection} id="intro">
      <div className={styles.topSectionHello}>
        <div>
          <h2>{config.APP_CONFIG.IntroSectionMessage}</h2>
          <div className={styles.topSectionIcons}>
            <a href={config.APP_CONFIG.GithubUrl} target="_blank" >
              <img src={github} alt="github"></img>
            </a>
            <a href={config.APP_CONFIG.ResumeUrl} target="_blank">
              <img src={resume} alt="github"></img>
            </a>
          </div>
        </div>
        <div>
          <img className={styles.topSectionHelloRightImage} src={codeThinkingImg} alt="Img" />
        </div>
      </div>
      <DownArrow navigateToSectionId="exp"></DownArrow>
    </div>
  );
};

export default IntroSection;
