import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CardForm from "./pages/CardForm";
import CardList from "./pages/CardList";
import CardComplete from "./pages/CardComplete";
import { ROUTES } from "./constants/routes";


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to={ROUTES.CARDS} replace />} />
          <Route path={ROUTES.CARDS} element={<CardList />} />
          <Route path={ROUTES.ADD} element={<CardForm />} />
          <Route path={ROUTES.COMPLETE} element={<CardComplete />} />

        </Route>
      </Routes>
    </HashRouter>
  );
};


export default App;
