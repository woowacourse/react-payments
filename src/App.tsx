import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "woowahan-yummy-modal/dist/ModalStateProvider";
import MainPage from "pages/MainPage";
import CardRegisterForm from "pages/RegisterPage/CardRegisterForm";
import LastPage from "pages/LastPage";
import GotLost from "pages/GotLost";
import LoadingPage from "pages/LoadingPage";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/register"
          element={
            <CardInfoProvider>
              <ModalStateProvider initialState>
                <CardRegisterForm />
              </ModalStateProvider>
            </CardInfoProvider>
          }
        />
        <Route
          path="/add-card-nickname"
          element={
            <CardInfoProvider>
              <LastPage />
            </CardInfoProvider>
          }
        />
        <Route
          path="/registering"
          element={
            <CardInfoProvider>
              <LoadingPage />
            </CardInfoProvider>
          }
        />
        <Route path="/got-lost" element={<GotLost />} />
        <Route path="*" element={<Navigate replace to="/got-lost" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
