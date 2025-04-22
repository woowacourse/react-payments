import CardNumbersInput from "./components/CardNumbersInput/CardNumbersInput";
import CardExpiryInput from "./components/CardExpiryInput/CardExpiryInput";
import CVCInput from "./components/CVCInput/CVCInput";
import CardPreview from "./components/CardPreview/CardPreview";
import "./App.css";
import CardCompanySelect from "./components/CardCompanySelect/CardCompanySelect";

function App() {
  return (
    <div className="app">
      <CardPreview />
      <form>
        <CardNumbersInput />
        <CardCompanySelect />
        <CardExpiryInput />
        <CVCInput />
      </form>
    </div>
  );
}

export default App;
