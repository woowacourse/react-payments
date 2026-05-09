import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("card", "../pages/CardNewPage.tsx"),
  route("card/done", "../pages/CardCreateDonePage.tsx"),
] satisfies RouteConfig;
