export enum ROUTES {
  HOME = "/",
  ABOUT = "/about",
  SKILLS = "/skills",
  CAREER = "/career",
  PROJECTS = "/projects",
  CONTACT = "/contact",
}

export interface MenuInterface {
  route: ROUTES;
  label: string;
}
