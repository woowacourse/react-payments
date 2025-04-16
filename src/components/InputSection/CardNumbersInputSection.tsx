import useCardNumbers from '../../hooks/useCardNumbers';
import ErrorMessage from '../ErrorMessage';
import CardNumbersInputs from './CardNumbersInputs';

import InputSection from './InputSection';

const CardNumbersInputSection = () => {
  const { cardNumbers, setCardNumbers, isError, errorMessage } =
    useCardNumbers();
  console.log(cardNumbers, 'cardNumbers');
  return (
    <InputSection
      title="결제할 카드번호를 입력해 주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      subtitle="카드번호"
    >
      <CardNumbersInputs
        cardNumbers={cardNumbers}
        setCardNumbers={setCardNumbers}
        isError={isError}
      ></CardNumbersInputs>
      <ErrorMessage message={errorMessage} />
    </InputSection>
  );
};

export default CardNumbersInputSection;
