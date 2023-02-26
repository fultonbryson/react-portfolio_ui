import { Bio } from "../components/pages/Bio";
import { Blog } from "../components/pages/Blog";
import { Contact } from "../components/pages/Contact";
import { Home } from "../components/pages/Home";

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
  // {
  //   path: "/blog",
  //   element: <Blog />,
  //   title: "Blog",
  // },
];
