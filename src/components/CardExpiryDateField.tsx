import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import { Card } from '../types/card';
import FieldTitle from './FieldTitle';
import InputField from './InputField';

export default function CardExpiryDateField({
  cardInfo,
  handleInput,
}: {
  cardInfo: Card;
  handleInput: (value: Card) => void;
}) {
  const handleExpiryDateInput = (value: { [key: string]: string }) => {
    handleInput({
      ...cardInfo,
      expiryDate: {
        ...cardInfo.expiryDate,
        ...value,
      },
    });
  };
  return (
    <>
      <FieldTitle
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputField
        inputTypes={INPUT_TYPE_CATEGORIES.EXPIRY_DATE}
        handleInput={handleExpiryDateInput}
      />
    </>
  );
}
