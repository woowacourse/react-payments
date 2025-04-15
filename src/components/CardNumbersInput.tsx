import useCardNumbers from '../hooks/useCardNumbers';
import Input from './Input';

const CardNumbersInput = () => {
  const { cardNumbers, setCardNumbers, isError, errorMessage } =
    useCardNumbers();

  return (
    <>
      <h2>결제할 카드 번호를 입력해주세요 </h2>
      <p>본인 명의의 카드만 결제 가능합니다</p>
      <p>카드 번호</p>
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
      <p>{errorMessage}</p>
    </>
  );
};

export default CardNumbersInput;
