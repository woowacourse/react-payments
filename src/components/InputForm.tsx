import styled from 'styled-components';
import { Card } from '../types/card';
import InputField from './InputField';
import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import SelectCardCompanyField from './SelectCardCompanyField';
import useInputForm from '../hooks/useInputForm';

interface Props {
  cardInfo: Card;
  handleInput: (value: Card) => void;
}

export default function InputForm({ cardInfo, handleInput }: Props) {
  const {
    step,
    handleOneValue,
    handleExpiryDateInput,
    handleSelectCardCompany,
    handleCardNumberInput,
    handleNext,
  } = useInputForm({ cardInfo, handleInput });

  return (
    <FormContainer>
      {step[4] && (
        <InputField
          title="비밀번호를 입력해 주세요"
          inputTypes={INPUT_TYPE_CATEGORIES.PASSWORD}
          handleInput={handleOneValue}
          handleNext={handleNext}
        />
      )}
      {step[3] && (
        <InputField
          title="CVC 번호를 입력해 주세요"
          inputTypes={INPUT_TYPE_CATEGORIES.CVC}
          handleInput={handleOneValue}
          handleNext={handleNext}
        />
      )}
      {step[2] && (
        <InputField
          title="카드 소유자 이름을 입력해 주세요"
          inputTypes={INPUT_TYPE_CATEGORIES.USER_NAME}
          handleInput={handleOneValue}
          handleNext={handleNext}
        />
      )}
      {/* {step[0] && (
        <UserNameField
          // inputTypes={INPUT_TYPE_CATEGORIES.USER_NAME}
          handleInput={handleOneValue}
          handleNext={handleNext}
        />
      )} */}
      {step[1] && (
        <InputField
          // inputRefs={inputFieldRefs2}
          title="카드 유효기간을 입력해 주세요"
          subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
          inputTypes={INPUT_TYPE_CATEGORIES.EXPIRY_DATE}
          handleInput={handleExpiryDateInput}
          handleNext={handleNext}
        />
      )}
      {step[0] && (
        <SelectCardCompanyField handleSelect={handleSelectCardCompany} />
      )}
      <InputField
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        inputTypes={INPUT_TYPE_CATEGORIES.CARD_NUMBER}
        handleInput={handleCardNumberInput}
        handleNext={handleNext}
      />
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 70%;
`;
