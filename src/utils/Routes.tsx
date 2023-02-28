import { Bio } from "../components/bio/Bio";
// import { Blog } from "../components/pages/Blog";
import { Contact } from "../components/contact/Contact";
import { Home } from "../components/home/Home";

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
