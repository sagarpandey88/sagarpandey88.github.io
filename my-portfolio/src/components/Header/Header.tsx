import * as React from "react";
import styles from "./Header.module.scss";
import { DeviceType } from "../../model/PortfolioModel";
import BurgerMenu from "./BurgerMenu";
import spAvatar from "../../images/sp_Avataar.svg";
import { scrollToElement } from "../../common/helpers";

const Header = (props: IHeader) => {
  const desktopView = (
    <ul className={styles.desktopNav}>
      <li onClick={() => scrollToElement("intro")}> Home</li>
      <li onClick={() => scrollToElement("exp")}>Experience</li>
      <li onClick={() => scrollToElement("work")}>My Work</li>
      <li onClick={() => scrollToElement("creds")}>My Creds</li>
      <li onClick={() => scrollToElement("contact")}>Contact</li>
    </ul>
  );

  const headerMarkup = (
    <div className={styles.headerLayout}>
      <div className={styles.headerLogoSection}>
        <span>
          <img src={spAvatar} alt="sp Avatar" />
        </span>
        <span>Sagar Pandey </span>
      </div>
      <div>
        {" "}
        {props.deviceType == "mobile" ? <BurgerMenu></BurgerMenu> : desktopView}
      </div>
    </div>
  );

  return (
    <>
      <div className={styles.gridHeader}>{headerMarkup}</div>
    </>
  );
};

export default Header;

interface IHeader {
  deviceType: DeviceType;
}
