import * as React from "react";
import commonStyle from "../../styles/commonStyles.module.scss";
import styles from "./MyWork.module.scss";
import { APP_CONFIG as config } from "../../config/portfolio.config";
import DownArrow from "../Home/DownArrow";

const MyWork = () => {
  return (
    <>
      <div className={[styles.workSection,  commonStyle.sectionContainer].join(" ")} id="work">
        <div className={"sectionHeader"}>
          <h2>My Work</h2>
        </div>
        <div className={  styles.sectionContents}>
          {config.WorkData.map((myWorkItem, myWorkIndex) => {
            return (
              <div className={styles.projectCard} key={myWorkIndex}>
                <div>
                  <img src={myWorkItem.ProjectImgSrc} />
                </div>
                <div className={styles.projectCardHeading}>
                  <span>
                    <b> {myWorkItem.ProjectTitle}</b>
                  </span>
                  <br />
                  {myWorkItem.ProjectDescription}
                </div>
              </div>
            );
          })}
        </div>
        <DownArrow navigateToSectionId="creds"></DownArrow>
      </div>
      
    </>
  );
};

export default MyWork;
