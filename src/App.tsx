import "./App.css";
import Card from "./domain/Card.ts";
import { useState } from "react";

function App() {
  const cardInstance = new Card();
  const [cardState, setCardState] = useState(cardInstance.information);
  console.log(cardState);
  return <div></div>;
}

export default App;
