import "./App.css";
import Card from "./components/Card";
import CardNumberForm from "./components/CardNumberForm";

function App() {
  return (
    <>
      <Card cardNumber={[1234, 1234, 1234, 1234]} expiration={[12, 12]}></Card>
      <CardNumberForm />
    </>
  );
}

export default App;
