import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "components/provider/ModalStateProvider";
import MainPage from "pages/MainPage";
import CardRegisterForm from "pages/RegisterPage/CardRegisterForm";
import LastPage from "pages/LastPage";
import GotLost from "pages/GotLost";
import useInitMainPage from "hooks/useInitMainPage";

const App = () => {
  const { cardList } = useInitMainPage();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage cardList={cardList} />} />
        <Route
          path="/register"
          element={
            <CardInfoProvider>
              <ModalStateProvider>
                <CardRegisterForm />
              </ModalStateProvider>
            </CardInfoProvider>
          }
        />
        <Route
          path="/completion"
          element={
            <CardInfoProvider>
              <LastPage />
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
