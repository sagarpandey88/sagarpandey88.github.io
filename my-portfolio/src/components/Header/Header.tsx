import * as React from "react";
import styles from "./Header.module.scss";
import { DeviceType } from "../../model/PortfolioModel";
import BurgerMenu from "./BurgerMenu";
import spAvatar from "../../images/sp_Avataar.svg";

const Header = (props: IHeader) => {
  const desktopView = (
    <ul className={styles.desktopNav}>
      <li>Home</li>
      <li>Experience</li>
      <li>My Work</li>
      <li>Contact</li>
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
    <div>  {props.deviceType == "mobile" ? <BurgerMenu></BurgerMenu> : desktopView}</div>
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
