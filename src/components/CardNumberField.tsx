import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { Card } from '../types/card';
import FieldTitle from './FieldTitle';
import InputField from './InputField';

export default function CardNumberField({
  cardInfo,
  handleInput,
}: {
  cardInfo: Card;
  handleInput: (value: Card) => void;
}) {
  const handleCardNumberInput = (value: { [key: string]: string }) => {
    handleInput({
      ...cardInfo,
      cardNumbers: {
        ...cardInfo.cardNumbers,
        ...value,
      },
    });
  };
  return (
    <>
      <FieldTitle
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
      />
      <InputField
        inputTypes={INPUT_TYPE_CATEGORIES.CARD_NUMBER}
        handleInput={handleCardNumberInput}
      />
    </>
  );
}
