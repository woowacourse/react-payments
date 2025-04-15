import './App.css';
import Input from './components/Input.tsx';
import useCardNumbers from './hooks/useCardNumbers.tsx';

function App() {
  const { cardNumbers, setCardNumbers, isError } = useCardNumbers();
  console.log(isError);

  return (
    <>
      <h1>React Payments</h1>
      <Input
        value={cardNumbers.firstNumber}
        onChange={setCardNumbers('firstNumber')}
        isError={isError.firstNumber}
      ></Input>
      <Input
        value={cardNumbers.secondNumber}
        onChange={setCardNumbers('secondNumber')}
        isError={isError.secondNumber}
      ></Input>
      <Input
        value={cardNumbers.thirdNumber}
        onChange={setCardNumbers('thirdNumber')}
        isError={isError.thirdNumber}
      ></Input>
      <Input
        value={cardNumbers.fourthNumber}
        onChange={setCardNumbers('fourthNumber')}
        isError={isError.fourthNumber}
      ></Input>
    </>
  );
}

export default App;
