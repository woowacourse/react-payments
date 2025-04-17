import { CardNumbersOptions } from '../../types/CardNumbers';
import ErrorMessage from '../ErrorMessage';
import InputField from '../InputField';
import InputSection from './InputSection';

const CardNumbersInputSection = ({
  cardNumbers,
  setCardNumbers,
  isError,
  errorMessage,
}: CardNumbersOptions) => {
  return (
    <InputSection
      title="결제할 카드번호를 입력해 주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      subtitle="카드번호"
    >
      <InputField
        value={cardNumbers.firstNumber}
        onChange={setCardNumbers('firstNumber')}
        isError={isError.firstNumber}
        placeholder="1234"
      ></InputField>
      <InputField
        value={cardNumbers.secondNumber}
        onChange={setCardNumbers('secondNumber')}
        isError={isError.secondNumber}
        placeholder="1234"
      ></InputField>
      <InputField
        value={cardNumbers.thirdNumber}
        onChange={setCardNumbers('thirdNumber')}
        isError={isError.thirdNumber}
        placeholder="1234"
      ></InputField>
      <InputField
        value={cardNumbers.fourthNumber}
        onChange={setCardNumbers('fourthNumber')}
        isError={isError.fourthNumber}
        placeholder="1234"
      ></InputField>
      <ErrorMessage message={errorMessage} />
    </InputSection>
  );
};

export default CardNumbersInputSection;
