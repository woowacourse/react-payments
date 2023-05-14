import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "woowahan-yummy-modal/dist/ModalStateProvider";
import MainPage from "pages/MainPage";
import CardRegisterForm from "pages/RegisterPage/CardRegisterForm";
import LastPage from "pages/LastPage";
import GotLost from "pages/GotLost";
import LoadingPage from "pages/LoadingPage";
import { CARD_NICKNAME_PAGE, CARD_REGISTER_PAGE, ERROR_PAGE, LOADING_PAGE, MAIN_PAGE } from "constants/path";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={MAIN_PAGE} element={<MainPage />} />
        <Route
          path={CARD_REGISTER_PAGE}
          element={
            <CardInfoProvider>
              <ModalStateProvider initialState>
                <CardRegisterForm />
              </ModalStateProvider>
            </CardInfoProvider>
          }
        />
        <Route
          path={CARD_NICKNAME_PAGE}
          element={
            <CardInfoProvider>
              <LastPage />
            </CardInfoProvider>
          }
        />
        <Route
          path={LOADING_PAGE}
          element={
            <CardInfoProvider>
              <LoadingPage />
            </CardInfoProvider>
          }
        />
        <Route path={ERROR_PAGE} element={<GotLost />} />
        <Route path="*" element={<Navigate replace to={ERROR_PAGE} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
