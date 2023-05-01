import { Routes, Route } from "react-router-dom";
import CardAddPage from "./pages/CardAddPage";
import CardListPage from "./pages/CardListPage";
import CardRegisteredPage from "./pages/CardRegisteredPage";
import { CardListProvider } from "./contexts/CardListContext";
import { ModalProvider } from "./contexts/ModalContext";
import { PATH } from "./constants";

const App = () => {
  return (
    <ModalProvider>
      <CardListProvider>
        <div className="app">
          <Routes>
            <Route path={PATH.ROOT} element={<CardListPage />} />
            <Route path={PATH.ADD} element={<CardAddPage />} />
            <Route
              path={`${PATH.REGISTER}/:id`}
              element={<CardRegisteredPage />}
            />
          </Routes>
        </div>
      </CardListProvider>
    </ModalProvider>
  );
};

export default App;
