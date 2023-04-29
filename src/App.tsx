import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { GlobalStyle } from "./style/resetStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CardListProvider } from "./context/cardListContext";
import { RegisterCard } from "./page/RegisterCard";

const App = () => {
  return (
    <CardListProvider>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCard" element={<AddCard />} />
          <Route path="/registerCard" element={<RegisterCard />} />
        </Routes>
      </BrowserRouter>
    </CardListProvider>
  );
};

export default App;
