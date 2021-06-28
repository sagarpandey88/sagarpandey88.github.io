import React from "react";
import styles from "./IntroSection.module.scss";
import { scrollToElement } from "../../common/helpers";
import codeThinkingImg from "../../images/codeThinking.svg";

const IntroSection = () => {
  return (
    <div className={styles.topSection} id="intro" >
      <div className={styles.topSectionHello}>
        <div>
          <h2>Hi, I am a Full Stack Developer and Consultant</h2>
        </div>
        <div>
          <img src={codeThinkingImg} alt="Img" />
        </div>
      </div>
      <div
        className={styles.topSectionDownButton}
        onClick={() => scrollToElement("exp")}
      >
        <img
          src="https://image.flaticon.com/icons/png/512/130/130900.png"
          alt="Down arrow"
        />
      </div>
    </div>
  );
};

export default IntroSection;
