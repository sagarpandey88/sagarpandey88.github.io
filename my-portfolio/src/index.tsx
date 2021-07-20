import React from "react";
import ReactDom from "react-dom";
import styles from "./index.module.scss";
import App from "./components/App";
import * as Config from "./config/portfolio.config";

document.title = Config.APP_CONFIG.Title;
ReactDom.render(React.createElement(App), document.getElementById("root"));

/**TODO:
 * 1. Smooth scroll
 * https://stackoverflow.com/questions/44375093/handling-scroll-animation-in-react
 *
 * 2. Themes
 * 3. Remember theme selection
 * 4. Offlijne mode
 *
 */
