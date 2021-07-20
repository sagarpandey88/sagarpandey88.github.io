import * as React from "react";
import themePickerButton from "../../images/colorPicker.svg";
import styles from "./ThemePicker.module.scss";

const ThemePicker = () => {
  const themeOptions = [
    {
      title: "Mustard",
      color: "#f9d976",
      themeId: "mustard",
    },
    {
      title: "Sea",
      color: "#76f9b1",
      themeId: "sea",
    },
    {
      title: "Tomato",
      color: "#FF6347",
      themeId: "tomato",
    },
  ];

  const changeTheme = (themeId: string) => {
    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("data-theme", themeId);

    // const avatar = document.getElementById("svgAvatar");

    // const svg = avatar.getSVGDocument();

    // svg.getElementById("Color/Palette/Blue-01").style.fill = "red";

    window.localStorage.setItem("portfolio-selectedTheme", themeId);
  };

  return (
    <div className={styles.themePickerOptions}>
      <ul>
        {themeOptions.map((theme, themeIndex) => {
          return (
            <li>
              <div
                className={styles.pickerOption}
                title={theme.title}
                style={{ backgroundColor: theme.color }}
                onClick={() => {
                  changeTheme(theme.themeId);
                }}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ThemePickerButton = (props: IThemePickerButton) => {
  const [themePickerVisible, setthemePickerVisible] =
    React.useState<boolean>(false);

  const showColorPicker = () => {
    setthemePickerVisible(!themePickerVisible);
  };

  return (
    <>
      <img
        src={themePickerButton}
        className={styles.themePickerButton}
        onClick={showColorPicker}
        alt="Theme Picker"
        title="Click to select a theme"
      />
      {themePickerVisible ? <ThemePicker></ThemePicker> : null}
    </>
  );
};

interface IThemePickerButton {
  //  onClick: () => void;
}

export { ThemePickerButton };
export default ThemePicker;
