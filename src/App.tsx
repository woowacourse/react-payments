import "./App.css";
import CardNumber from "./CardNumber";
import CardExpirationDate from "./CardExpirationDate";
import CardCvcNumber from "./CardCvcNumber";
import CardLayout from "./components/Card/CardLayout";

function App() {
  return (
    <>
      <CardLayout />
      <CardNumber />
      <CardExpirationDate />
      <CardCvcNumber />
    </>
  );
}

export default App;
