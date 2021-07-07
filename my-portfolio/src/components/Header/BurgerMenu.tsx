import * as React from "react";
import hamburgerImg from "../../images/hamburger.svg";
import styles from "./Header.module.scss"
import { scrollToElement } from "../../common/helpers";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const onMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const menu = (
    <div
     className={styles.menuContainer}
    >
      <span className={styles.closeButton} onClick={onMenuToggle}> X </span>
      <ul>
        <li onClick={() => scrollToElement("intro")}> Home</li>
        <li onClick={() => scrollToElement("exp")} >Experience</li>
        <li onClick={() => scrollToElement("work")}>My Work</li>
        <li onClick={() => scrollToElement("creds")}>My Creds</li>
        <li onClick={() => scrollToElement("contact")}>Contact</li>
      </ul>
    </div>
  );

  return (
    <>
      {isOpen ? (
        menu
      ) : (
        <span onClick={onMenuToggle} className={styles.burgerButton}>          
          <img src={hamburgerImg} alt="menu"></img>
        </span>
      )}
    </>
  );
};

export default BurgerMenu;
