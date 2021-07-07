import * as React from "react";
import downArrow from "../../images/downArrow.png";
import { scrollToElement } from "../../common/helpers";
import styles from "../../styles/commonStyles.module.scss";

const DownArrow = (props: DownArrowProps) => {
  return (
    <>
      <div
        className={styles.downArrowButton}
        onClick={() => scrollToElement(props.navigateToSectionId)}
      >
        <img src={downArrow} alt="Down arrow" />
      </div>
    </>
  );
};

interface DownArrowProps {
  navigateToSectionId: string;
}

export default DownArrow;
