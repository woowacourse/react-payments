import "./App.css";
import CardNumbersInput from "./components/CardNumbersInput/CardNumbersInput";
import CardExpiryInput from "./components/CardExpiryInput/CardExpiryInput";
import CVCInput from "./components/CVCInput/CVCInput";

function App() {

  return (
    <>
      <form>
        <CardNumbersInput /> 
        <CardExpiryInput/>
        <CVCInput/>
      </form>
    </>
  );
}

export default App;
