import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./utils/Routes";

function App() {
  return (
    <>
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
