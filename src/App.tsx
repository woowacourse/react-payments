import { Home } from "./page/Home";
import { AddCard } from "./page/AddCard";
import { GlobalStyle } from "./style/resetStyle";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CardProvider } from "./context/cardContext";

const App = () => {
  return (
    <CardProvider>
      <GlobalStyle />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCard" element={<AddCard />} />
        </Routes>
      </BrowserRouter>
    </CardProvider>
  );
};

export default App;
