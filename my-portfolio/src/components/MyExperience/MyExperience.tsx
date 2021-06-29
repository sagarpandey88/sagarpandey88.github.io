import * as React from "react";
import styles from "./MyExperience.module.scss";
import commonStyle from "../../styles/commonStyles.module.scss";
import { experienceData } from "./ExperienceConfiguration";

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
        {experienceData.map((exp, catIndex) => {
          return (
            <div key={catIndex}>
              <div>
                {exp.Stack.map((expItem, expItemIndex) => {
                  return <img src={expItem.SvgSrc} alt={expItem.Title} key={expItemIndex} />;
                })}
              </div>
              <div> {exp.Category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyExperience;
