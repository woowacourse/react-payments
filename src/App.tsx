import "./App.css";
import CardNumber from "./CardNumber/CardNumber";
import CardExpirationDate from "./CardExpirationDate/CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber/CardCvcNumber";
import CardLayout from "./components/Card/CardLayout";

function App() {
  return (
    <div className="App">
      <CardLayout />
      <div className="card-input">
        <CardNumber />
        <CardExpirationDate />
        <CardCvcNumber />
      </div>
    </div>
  );
}

export default App;
