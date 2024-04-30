import styled from 'styled-components';
import { Card, CardCompany } from '../types/card';
import InputField from './InputField';
import INPUT_TYPE_CATEGORIES from '../constants/inputType';
import SelectCardCompanyField from './SelectCardCompanyField';
import useStep from '../hooks/useStep';
import useComplete from '../hooks/useComplete';
import { DEFAULT_CARD_BOOLEAN } from '../constants/card';

interface Props {
  cardInfo: Card;
  handleInput: (value: Card) => void;
  setCanSubmit: (value: boolean) => void;
}

export default function InputForm({
  cardInfo,
  handleInput,
  setCanSubmit,
}: Props) {
  const { step, handleNext } = useStep();
  const { handleComplete } = useComplete({
    defaultValue: DEFAULT_CARD_BOOLEAN,
    setCanSubmit,
  });

  const handleInputValue = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      ...value,
    });
  };

  const handleExpiryDateInput = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      expiryDate: {
        ...cardInfo.expiryDate,
        ...value,
      },
    });
  };

  const handleSelectCardCompany = (value: CardCompany) => {
    handleInput({
      ...cardInfo,
      cardCompany: value,
    });
  };

  const handleCardNumberInput = (value: Record<string, string>) => {
    handleInput({
      ...cardInfo,
      cardNumbers: {
        ...cardInfo.cardNumbers,
        ...value,
      },
    });
  };

  return (
    <FormContainer>
      {step['password'] && (
        <InputField
          title="비밀번호를 입력해 주세요"
          inputTypes={INPUT_TYPE_CATEGORIES.PASSWORD}
          handleInput={handleInputValue}
          handleNext={() => handleNext('')}
          handleComplete={(isComplete: boolean) =>
            handleComplete('password', isComplete)
          }
        />
      )}
      {step['cvc'] && (
        <InputField
          title="CVC 번호를 입력해 주세요"
          inputTypes={INPUT_TYPE_CATEGORIES.CVC}
          handleInput={handleInputValue}
          handleNext={() => handleNext('password')}
          handleComplete={(isComplete: boolean) =>
            handleComplete('cvc', isComplete)
          }
        />
      )}
      {step['userName'] && (
        <InputField
          title="카드 소유자 이름을 입력해 주세요"
          inputTypes={INPUT_TYPE_CATEGORIES.USER_NAME}
          handleInput={handleInputValue}
          handleNext={() => handleNext('cvc')}
          handleComplete={(isComplete: boolean) =>
            handleComplete('userName', isComplete)
          }
        />
      )}
      {step['expiryDate'] && (
        <InputField
          title="카드 유효기간을 입력해 주세요"
          subtitle="월/년도(MMYY)를 순서대로 입력해 주세요."
          inputTypes={INPUT_TYPE_CATEGORIES.EXPIRY_DATE}
          handleInput={handleExpiryDateInput}
          handleNext={() => handleNext('userName')}
          handleComplete={(isComplete: boolean) =>
            handleComplete('expiryDate', isComplete)
          }
        />
      )}
      {step['cardCompany'] && (
        <SelectCardCompanyField
          handleSelect={handleSelectCardCompany}
          handleNext={() => handleNext('expiryDate')}
          handleComplete={(isComplete: boolean) =>
            handleComplete('cardCompany', isComplete)
          }
        />
      )}
      <InputField
        title="결제할 카드 번호를 입력해 주세요"
        subtitle="본인 명의의 카드만 결제 가능합니다."
        inputTypes={INPUT_TYPE_CATEGORIES.CARD_NUMBER}
        handleInput={handleCardNumberInput}
        handleNext={() => handleNext('cardCompany')}
        handleComplete={(isComplete: boolean) =>
          handleComplete('cardNumbers', isComplete)
        }
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
