import CardNumberInput from "./components/CardNumberInput";
import InputField from "./components/InputField";

export default function App() {
  return (
    <InputField kind="cardNumber">
      <CardNumberInput />
    </InputField>
  );
}
