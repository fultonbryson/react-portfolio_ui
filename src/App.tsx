import { Footer } from "./components/pageElements";
import { NavDrawer } from "./components/NavDrawer";
import AppRouter from "./utils/Router";

function App() {
  return (
    <>
      <NavDrawer />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
