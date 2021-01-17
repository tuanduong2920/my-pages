import About from "../Pages/About/About";
import Education from "../Pages/Education/Education";
import Interests from "../Pages/Interests/Interests";
import Skills from "../Pages/Skill/Skill";

const Routes = [
  {
    path: "/interests",
    component: Interests,
    exact: true,
  },
  {
    path: "/education",
    component: Education,
    exact: true,
  },
  {
    path: "/skills",
    component: Skills,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/",
    component: About,
    exact: true,
  },
];

export default Routes;
