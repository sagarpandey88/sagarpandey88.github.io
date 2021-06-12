import * as React from "react";
import hamburgerImg from "../../images/hamburger.svg";
import styles from "./Header.module.scss"

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
        <li>Home</li>
        <li>Experience</li>
        <li>My Work</li>
        <li>Contact</li>
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
