import * as React from "react";
import { APP_CONFIG as config } from "../../config/portfolio.config";
import commonStyle from "../../styles/commonStyles.module.scss";
import DownArrow from "../Home/DownArrow";
import styles from "./MyCredentials.module.scss"

const MyCredentials = () => {
  return (
    <>
      <div
        className={[commonStyle.sectionContainer, styles.credentialSection].join(
          " "
        )}
        id="creds"
      >
        <div className={"sectionHeader"}>
          <h2>My Certifications</h2>
        </div>

        <div className={styles.sectionContents}>
          {config.CredentailsData.map((cred, credIndex) => {
            return <img key={credIndex} src={cred.ImgSrc} alt={cred.Title}></img>;
          })}
        </div>
        <DownArrow navigateToSectionId="contact"></DownArrow>
      </div>
    </>
  );
};

export default MyCredentials;
