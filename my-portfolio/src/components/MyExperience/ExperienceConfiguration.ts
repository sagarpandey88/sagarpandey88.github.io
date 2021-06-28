import azure from "../../images/Experience/azure.svg";
import devops from "../../images/Experience/devops.svg";
import firebase from "../../images/Experience/firebase.svg";
import git from "../../images/Experience/git.svg";
import gulp from "../../images/Experience/gulp.svg";
import javascript from "../../images/Experience/javascript.svg";
import jQuery from "../../images/Experience/jQuery.svg";
import microsoft365 from "../../images/Experience/microsoft_365.svg";
import net from "../../images/Experience/net.svg";
import powerApps from "../../images/Experience/Power-Apps.svg";
import powerAutomate from "../../images/Experience/Power-Automate.svg";
import react from "../../images/Experience/react.svg";
import sharepoint from "../../images/Experience/sharepoint.svg";
import sql from "../../images/Experience/sql.svg";
import ts from "../../images/Experience/typescript.svg";
import vs from "../../images/Experience/visualstudio.svg";

export const experienceData: IExperience[] = [
  {
    Category: "Front End Development",
    Stack: [
      { Title: "JS", SvgSrc: javascript },
      { Title: "TypeScript", SvgSrc: ts },
      { Title: "React", SvgSrc: react },
      { Title: "jQuery", SvgSrc:jQuery },
      { Title: "gulp", SvgSrc:gulp },
    ],
  },
  {
    Category: "Back End Development",
    Stack: [
      { Title: ".NET", SvgSrc: net },
      { Title: "Firebase", SvgSrc: firebase },
      { Title: "SQL", SvgSrc:sql },
    ],
  },
  {
    Category: "Platforms",
    Stack: [
      { Title: "Azure", SvgSrc: azure },
      { Title: "SharePoint", SvgSrc: sharepoint },
      { Title: "Microsoft 365", SvgSrc: microsoft365 },
      { Title: "Power Apps", SvgSrc: powerApps },
      { Title: "Power Automate", SvgSrc:powerAutomate },
    ],
  },
  {
    Category: "Tools",
    Stack: [
      { Title: "Visual Studio", SvgSrc: vs },
      { Title: "git", SvgSrc: git },
      
    ],
  },
] as IExperience[];

export interface IExperience {
  Category: string;
  Stack: IStackDetails[];
}

export interface IStackDetails {
  Title: string;
  SvgSrc: string;
}
