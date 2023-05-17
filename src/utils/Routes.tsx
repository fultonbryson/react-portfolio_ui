import { Bio } from "../components/bio/Bio";
// import { Blog } from "../components/pages/Blog";
import { Contact } from "../components/contact/Contact";
import { Home } from "../components/home/Home";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const appRoutes = [
  {
    path: "/",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/bio",
    element: <Bio />,
    title: "Bio",
  },
  {
    path: "/contact",
    element: <Contact />,
    title: "Contact",
  },
];

export const socialRoutes = [
  {
    path: "https://www.linkedin.com/in/bryson-fulton-79b771206/",
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    path: "https://twitter.com/brysonpfulton",
    icon: <FontAwesomeIcon icon={faTwitter} />,
  },
  {
    path: "https://github.com/fultonbryson",
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
];
