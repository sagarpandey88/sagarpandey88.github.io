import * as React from "react";
import styles from "../Home/Home.module.scss";
import { DeviceType } from "../../model/PortfolioModel";

const Header = (props: IHeader) => {
  const mobileView = <div className={styles.gridHeader}>I am a burger</div>;

  const desktopView = (
    <div className={styles.gridHeader}>
      <ul>
        <li>Home</li>
        <li>Experience</li>
        <li>My Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );

  return <>{props.deviceType == "mobile" ? mobileView : desktopView}</>;
};

export default Header;

interface IHeader {
  deviceType: DeviceType;
}
