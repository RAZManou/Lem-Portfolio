export enum ROUTES {
  HOME = "/",
  ABOUT = "/about",
}

export interface MenuInterface {
  route: ROUTES;
  label: string;
}
