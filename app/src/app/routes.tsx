import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("card", "../pages/card/Create.tsx"),
  route("card/done", "../pages/card/CreateComplete.tsx"),
] satisfies RouteConfig;
