import * as React from "react";
import commonStyle from "../../styles/commonStyles.module.scss";
import styles from "./MyWork.module.scss";

const MyWork = () => {
  const myWorkData = [
    {
      ProjectTitle: "Portfolio",
      ProjectDescription: "Lots of stuff here which will be display lol",
      ProjectImgSrc:
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      ProjectTitle: "CSR",
      ProjectDescription: "Lots of stuff here which will be display lol",
      ProjectImgSrc:
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
    {
      ProjectTitle: "Vaccine Search",
      ProjectDescription: "Lots of stuff here which will be display lol",
      ProjectImgSrc:
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    },
  ];

  return (
    <>
      <div className={commonStyle.sectionContainer} id="work">
        <div className={"sectionHeader"}>
          <h2>My Work</h2>
        </div>
        <div className={[styles.workSection, , "sectionContents"].join(" ")}>
          {myWorkData.map((myWorkItem, myWorkIndex) => {
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
      </div>
    </>
  );
};

export default MyWork;
