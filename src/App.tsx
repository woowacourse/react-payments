import { GlobalStyle } from "./style/resetStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CardListProvider } from "./context/cardListContext";
import { PAGE } from "./constant/routePath";
import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { RegisterCard } from "./page/RegisterCard";
import { Loading } from "./page/Loading";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CardListProvider>
        <GlobalStyle />
        <Routes>
          <Route path={PAGE.home} element={<Home />} />
          <Route path={PAGE.addCard} element={<AddCard />} />
          <Route path={PAGE.loading} element={<Loading />} />
          <Route path={PAGE.registerCard} element={<RegisterCard />} />
        </Routes>
      </CardListProvider>
    </BrowserRouter>
  );
};

export default App;
