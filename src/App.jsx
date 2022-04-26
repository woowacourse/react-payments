import CardHolderNameInput from "./CardHolderNameInput.jsx";
import CardNumberInput from "./CardNumberInput.jsx";
import CardPasswordInput from "./CardPasswordInput.jsx";
import CardCVCInput from "./CardCVCInput.jsx";
import CardExpireDateInput from "./CardExpireDateInput.jsx";

function App() {
  return (
    <div className="App">
      <CardNumberInput />
      <CardExpireDateInput />
      <CardHolderNameInput />
      <CardCVCInput />
      <CardPasswordInput />
    </div>
  );
}

export default App;
