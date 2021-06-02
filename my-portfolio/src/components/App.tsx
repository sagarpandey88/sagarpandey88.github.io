import * as React from "react";
import { DeviceType } from "../model/PortfolioModel";
import Home from "./Home/Home";

const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  const [height, setHeight] = React.useState(window.innerHeight);

  const [deviceType, setDeviceType] = React.useState<DeviceType>("desktop");

  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      // Set the height in state as well as the width
      setHeight(window.innerHeight);

      if (window.innerWidth > breakpoint) {
        setDeviceType("desktop");
      } else {
        setDeviceType("mobile");
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div>
      <Home deviceType={deviceType}></Home>
    </div>
  );
};

export default App;
