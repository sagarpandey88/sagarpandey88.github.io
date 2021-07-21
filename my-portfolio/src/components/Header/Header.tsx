import * as React from "react";
import styles from "./Header.module.scss";
import { DeviceType } from "../../model/PortfolioModel";
import BurgerMenu from "./BurgerMenu";
import spAvatar from "../../images/sp_Avataar.svg";
import { scrollToElement } from "../../common/helpers";
import * as config from "../../config/portfolio.config";
import ThemePickerButton from "../ThemePicker/ThemePicker";
import AppBar from "./AppBar"

const Header = (props: IHeader) => {
  const desktopView = (
    <ul className={styles.desktopNav}>
      <li onClick={() => scrollToElement("intro")}> Home</li>
      <li onClick={() => scrollToElement("exp")}>Experience</li>
      <li onClick={() => scrollToElement("work")}>My Work</li>
      <li onClick={() => scrollToElement("creds")}>My Creds</li>
      <li onClick={() => scrollToElement("contact")}>Contact</li>
      <li>
        <ThemePickerButton></ThemePickerButton>
      </li>
    </ul>
  );

  const headerMarkup = (
    <>
      <div className={styles.headerLayout}>
        <div className={styles.headerLogoSection}>
          <span>
            <img src={spAvatar}></img>
            {/* <object type="image/svg+xml" data={spAvatar} id="svgAvatar" >
              <img src={spAvatar} />
            </object> */}
          </span>
          <span>{config.APP_CONFIG.Title} </span>
        </div>
        <div>
          {props.deviceType == "mobile" ? (
            //<BurgerMenu></BurgerMenu>
            <AppBar></AppBar>
          ) : (
            desktopView
         
          )}
        </div>
      </div>
    </>
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
