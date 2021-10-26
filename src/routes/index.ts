import Home from "../views/home";
import Login from "../views/login";
import { RouteRoles, Routes } from "./types";

const RoutesMap = {
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
};

const ROUTES: Routes = [
  {
    path: RoutesMap.LOGIN,
    Component: Login,
    roles: [RouteRoles.ADMIN, RouteRoles.CUSTOMER],
  },
  {
    path: RoutesMap.DASHBOARD,
    Component: Home,
    roles: [RouteRoles.CUSTOMER],
  },
];

export { ROUTES, RoutesMap };
