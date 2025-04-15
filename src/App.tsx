import './App.css';
import Input from './components/Input.tsx';
import useCardNumbers from './hooks/useCardNumbers.tsx';

function App() {
  const [cardNumbers, setCardNumbers] = useCardNumbers();

  return (
    <>
      <h1>React Payments</h1>
      <Input
        value={cardNumbers.firstNumber}
        onChange={setCardNumbers('firstNumber')}
      ></Input>
      <Input
        value={cardNumbers.secondNumber}
        onChange={setCardNumbers('secondNumber')}
      ></Input>
      <Input
        value={cardNumbers.thirdNumber}
        onChange={setCardNumbers('thirdNumber')}
      ></Input>
      <Input
        value={cardNumbers.fourthNumber}
        onChange={setCardNumbers('fourthNumber')}
      ></Input>
    </>
  );
}

export default App;
