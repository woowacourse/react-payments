import styled from 'styled-components';
import { Card } from '../types/card';
import InputField from './InputField';
import INPUT_TYPE_CATEGORIES from '../constants/inputType';

interface Props {
  cardInfo: Card;
  handleInput: (value: Card) => void;
}

export default function InputForm({ cardInfo, handleInput }: Props) {
  const handleCardNumberInput = (value: { [key: string]: string }) => {
    handleInput({
      ...cardInfo,
      cardNumbers: {
        ...cardInfo.cardNumbers,
        ...value,
      },
    });
  };

  const handleExpiryDateInput = (value: { [key: string]: string }) => {
    handleInput({
      ...cardInfo,
      expiryDate: {
        ...cardInfo.expiryDate,
        ...value,
      },
    });
  };

  const handleUserNameInput = (value: { [key: string]: string }) => {
    handleInput({
      ...cardInfo,
      ...value,
    });
  };

  return (
    <FormContainer>
      <InputField
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        inputTypes={INPUT_TYPE_CATEGORIES.CARD_NUMBER}
        handleInput={handleCardNumberInput}
      />
      <InputField
        title="카드 유효기간을 입력해 주세요"
        subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        inputTypes={INPUT_TYPE_CATEGORIES.EXPIRY_DATE}
        handleInput={handleExpiryDateInput}
      />
      <InputField
        title="카드 소유자 이름을 입력해 주세요"
        inputTypes={INPUT_TYPE_CATEGORIES.USER_NAME}
        handleInput={handleUserNameInput}
      />
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
