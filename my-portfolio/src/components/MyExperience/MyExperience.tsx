import * as React from "react";
import styles from "./MyExperience.module.scss";
const MyExperience = () => {
  const data: IExperience[] = [
    {
      Category: "Front End",
      Stack: [
        { Title: "JS", SvgSrc: "" },
        { Title: "React", SvgSrc: "" },
      ],
    },
    {
      Category: "Back End",
      Stack: [
        { Title: "Azure Function API", SvgSrc: "" },
        { Title: ".Net Core", SvgSrc: "" },
      ],
    },
    {
      Category: "Database",
      Stack: [
        { Title: "MS SQL", SvgSrc: "" },
        { Title: "Firebase", SvgSrc: "" },
        { Title: "MongoDb", SvgSrc: "" },
      ],
    },
    {
      Category: "Platform / Tool / Methodologies",
      Stack: [
        { Title: "SharePoint", SvgSrc: "" },
        { Title: "Azure", SvgSrc: "" },
        { Title: "DevOps", SvgSrc: "" },
        { Title: "Agile", SvgSrc: "" },
      ],
    },
  ] as IExperience[];

  return (
    <div className={styles.expContainer}>
      {data.map((exp, catIndex) => {
        return (
          <div className={styles.catContainer} key={catIndex}>
            <div className={styles.header}>{exp.Category}</div>
            <div className={styles.tags}>
              {exp.Stack.map((expItem, expItemIndex) => {
                return (
                  <span className={styles.brokertag} key={expItemIndex}>
                    {" "}
                    {expItem.Title}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyExperience;

interface IExperience {
  Category: string;
  Stack: IStackDetails[];
}

interface IStackDetails {
  Title: string;
  SvgSrc: string;
}
