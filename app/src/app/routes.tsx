import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("card/", "../pages/card/List.tsx"),
  route("card/create/", "../pages/card/Create.tsx"),
  route("card/create/done", "../pages/card/CreateComplete.tsx"),
] satisfies RouteConfig;
