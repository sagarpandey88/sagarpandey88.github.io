import * as React from "react";
import styles from "./MyExperience.module.scss";
import commonStyle from "../../styles/commonStyles.module.scss";
import { APP_CONFIG as config } from "../../config/portfolio.config";
import DownArrow from "../Home/DownArrow";

const MyExperience = () => {
  return (
    <div
      className={[commonStyle.sectionContainer, styles.myExperience].join(" ")}
      id="exp"
    >
      <div className={"sectionHeader"}>
        <h2>My Experience</h2>
      </div>
      <div className={styles.sectionContents}>
        {config.ExperienceData.map((exp, catIndex) => {
          return (
            <div key={catIndex}>
              <div>
                {exp.Stack.map((expItem, expItemIndex) => {
                  return (
                    <img
                      src={expItem.SvgSrc}
                      alt={expItem.Title}
                      key={expItemIndex}
                    />
                  );
                })}
              </div>
              <div> {exp.Category}</div>
            </div>
          );
        })}
      </div>
      <DownArrow navigateToSectionId="work"></DownArrow>
    </div>
  );
};

export default MyExperience;
