import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("card/", "../pages/card/Index.tsx"),
  route("card/create/", "../pages/card/Register.tsx"),
  route("card/create/done/", "../pages/card/RegisterComplete.tsx"),
] satisfies RouteConfig;
