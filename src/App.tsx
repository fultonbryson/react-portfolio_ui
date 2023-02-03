import { Footer } from "./components/elements/pageElements";
import { Header } from "./components/elements/Header";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./utils/Routes";

function App() {
  return (
    <>
      <Routes>
        {appRoutes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
