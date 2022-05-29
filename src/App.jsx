import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";

import { CardInfoProvider } from "./contexts/CardInfoContext";
import PossessCard from "./pages/PossessCard";
import AddCard from "./pages/AddCard";

import { ROUTES } from "./constants/constants";

function App() {
  return (
    <div className="App">
      <CardInfoProvider>
        <GlobalStyle />
        <Routes>
          <Route path={ROUTES.HOME} element={<PossessCard />} />
          <Route path={ROUTES.ADD_CARD} element={<AddCard />} />
        </Routes>
      </CardInfoProvider>
    </div>
  );
}

export default App;
