import "./App.css";
import CardExpirationDate from "./components/CardExpirationDate";
import CardNumbers from "./components/CardNumbers";

function App() {
  return (
    <>
      <h1>React Payments</h1>
      <CardNumbers></CardNumbers>
      <CardExpirationDate></CardExpirationDate>
    </>
  );
}

export default App;
