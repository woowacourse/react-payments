import "./App.css";
import Card from "./components/Card";
import NumberInput from "./components/NumberInput";

function App() {
  return (
    <>
      <NumberInput maxLength={2} placeholder="1234"></NumberInput>
      <Card cardNumber={[1234, 1234, 1234]} expiration={[12, 12]}></Card>
    </>
  );
}

export default App;
