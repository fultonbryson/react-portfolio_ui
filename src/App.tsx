import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayData } from "./utils/slices/screenSlice";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "./utils/Routes";
import { RootState } from "./utils/store";
import {
  DesktopFooter,
  MobileFooter,
} from "./components/elements/pageElements";

function App() {
  const dispatch = useDispatch();
  const [screenSize, getScreenSize] = useState({
    width: window.innerWidth,
  });

  const displayType = useSelector(
    (state: RootState) => state.screen.displayType
  );

  const setScreenSize = () => {
    getScreenSize({
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", setScreenSize);
    dispatch(setDisplayData(screenSize.width));

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenSize]);

  return (
    <>
      <Routes>
        {appRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>

      {displayType === "MOBILE" ? <MobileFooter /> : <DesktopFooter />}
    </>
  );
}

export default App;
