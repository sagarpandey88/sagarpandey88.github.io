import React from "react";
import ReactDom from "react-dom";
import styles from "./index.module.scss";
import App from "./components/App";

const element = <div className={styles.helloWorld}>Hello Wo1rld Again!</div>;

ReactDom.render(React.createElement(App), document.getElementById("root"));
