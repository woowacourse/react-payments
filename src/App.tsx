import "./App.css";
import CardExpirationDate from "./components/CardExpirationDate";
import CardNumbers from "./components/CardNumbers";
import CardOwnerName from "./components/CardOwnerName";

function App() {
  return (
    <>
      <h1>React Payments</h1>
      <CardNumbers></CardNumbers>
      <CardExpirationDate></CardExpirationDate>
      <CardOwnerName></CardOwnerName>
    </>
  );
}

export default App;
