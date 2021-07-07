
export type DeviceType = "mobile" | "desktop";

export interface IExperience {
    Category: string;
    Stack: IStackDetails[];
  }
  
  export interface IStackDetails {
    Title: string;
    SvgSrc: string;
  }