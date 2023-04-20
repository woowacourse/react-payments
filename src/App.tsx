import { useState } from "react";
import AddCardPage from "./components/AddCardPage";
import Homepage from "./components/Homepage";
import "./styles/index.css";
export default function App() {
  const [pageIndex, setPageIndex] = useState(0);
  const [cardList, setCardList] = useState([]);

  const onSubmit = () => {
    setCardList([]);
    setPageIndex(0);
  };

  return (
    <div className="app">
      {pageIndex === 0 && <Homepage onAddCardClick={() => setPageIndex(1)} />}
      {pageIndex === 1 && <AddCardPage />}
    </div>
  );
}
