
import { lazy } from "react";

const Routes = [
  {
    path: "/interests",
    component: lazy(() => import("../Pages/Interests/Interests")),
    exact: true,
  },
  {
    path: "/education",
    component: lazy(() => import("../Pages/Education/Education")),
    exact: true,
  },
  {
    path: "/skills",
    component: lazy(() => import("../Pages/Skill/Skill")),
    exact: true,
  },
  {
    path: "/about",
    component: lazy(() => import("../Pages/About/About")),
    exact: true,
  },
  {
    path: "/",
    component: lazy(() => import("../Pages/About/About")),
    exact: false,
  },
];

export default Routes;
