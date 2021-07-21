import React from "react";
import { scrollToElement } from "../../common/helpers";
import Home from "../../images/AppBar/Home.svg"
import Experience from "../../images/AppBar/Experience.svg"
import Work from "../../images/AppBar/Work.svg"
import Certificate from "../../images/AppBar/Certificate.svg"
import Contact from "../../images/AppBar/Contact.svg"
import styles from "./Header.module.scss"


const AppBar = () => {
  return (
    <div className={styles.appBar}>
      <ul>
        <li onClick={() => scrollToElement("intro")}>  <img src={Home} /> </li>
        <li onClick={() => scrollToElement("exp")}><img src={Experience} /></li>
        <li onClick={() => scrollToElement("work")}><img src={Work} /></li>
        <li onClick={() => scrollToElement("creds")}><img src={Certificate} /></li>
        <li onClick={() => scrollToElement("contact")}><img src={Contact} /></li>
      </ul>
    </div>
  );
};

export default AppBar;
