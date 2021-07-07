import * as ExpImages from "../images/Experience";
import * as CredImages from "../images/Credentials";
import * as WorkImages from "../images/MyWork";

export const APP_CONFIG = {
  Title: "Sagar Pandey",
  IntroSectionMessage: "Hi, I am a Full Stack Developer and Consultant",
  ExperienceData: [
    {
      Category: "Front End Development",
      Stack: [
        { Title: "JS", SvgSrc: ExpImages.javascript },
        { Title: "TypeScript", SvgSrc: ExpImages.ts },
        { Title: "React", SvgSrc: ExpImages.react },
        { Title: "jQuery", SvgSrc: ExpImages.jQuery },
        { Title: "gulp", SvgSrc: ExpImages.gulp },
      ],
    },
    {
      Category: "Back End Development",
      Stack: [
        { Title: ".NET", SvgSrc: ExpImages.net },
        { Title: "Firebase", SvgSrc: ExpImages.firebase },
        { Title: "SQL", SvgSrc: ExpImages.sql },
      ],
    },
    {
      Category: "Platforms",
      Stack: [
        { Title: "Azure", SvgSrc: ExpImages.azure },
        { Title: "SharePoint", SvgSrc: ExpImages.sharepoint },
        { Title: "Microsoft 365", SvgSrc: ExpImages.microsoft365 },
        { Title: "Power Apps", SvgSrc: ExpImages.powerApps },
        { Title: "Power Automate", SvgSrc: ExpImages.powerAutomate },
      ],
    },
    {
      Category: "Tools",
      Stack: [
        { Title: "Visual Studio", SvgSrc: ExpImages.vs },
        { Title: "git", SvgSrc: ExpImages.git },
      ],
    },
  ],
  WorkData: [
    {
      ProjectTitle: "Portfolio",
      ProjectDescription: "Lots of stuff here which will be display lol",
      ProjectImgSrc: WorkImages.portfolio,
    },
    {
      ProjectTitle: "CSR",
      ProjectDescription: "Lots of stuff here which will be display lol",
      ProjectImgSrc: WorkImages.csr,
    },
    {
      ProjectTitle: "Vaccine Search",
      ProjectDescription: "Lots of stuff here which will be display lol",
      ProjectImgSrc: WorkImages.vaccine,
    },
  ],
  CredentailsData: [
    {
      Title: "Azure Fundamentals",
      ImgSrc: CredImages.azureFundamentals,
    },
    {
      Title: "Microsoft 365 Developer Associate",
      ImgSrc: CredImages.m365DeveloperAssociate,
    },
    {
      Title: "Microsoft 365 Fundamentals",
      ImgSrc: CredImages.m365Fundamentals,
    },
    {
      Title: "Microsoft Certified Solutions Associate",
      ImgSrc: CredImages.mcsa,
    },
    {
      Title: "Microsoft Certified Solutions Developer",
      ImgSrc: CredImages.mcsd,
    },
  ],
};
