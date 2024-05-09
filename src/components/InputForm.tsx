import styled from 'styled-components';
import { Card } from '../types/card';
import useComplete from '../hooks/useComplete';
import { DEFAULT_CARD_BOOLEAN } from '../constants/card';
import CardHolderField from './InputField/CardHolderField';
import CardExpiryDateField from './InputField/ExpiryDateField';
import CardNumbersField from './InputField/CardNumbersField';
import CVCField from './InputField/CVCField';
import PasswordField from './InputField/PasswordField';
import CardCompanyField from './InputField/CardCompany';

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

  return (
    <FormContainer>
      <CardNumbersField
        handleInput={handleInputValue}
        handleComplete={(isComplete: boolean) =>
          handleComplete('cardNumbers', isComplete)
        }
      />
      <CardCompanyField
        handleInput={handleInputValue}
        handleComplete={(isComplete: boolean) =>
          handleComplete('cardCompany', isComplete)
        }
      />
      <CardExpiryDateField
        handleInput={handleExpiryDateInput}
        handleComplete={(isComplete: boolean) =>
          handleComplete('expiryDate', isComplete)
        }
      />
      <CardHolderField
        handleInput={handleInputValue}
        handleComplete={(isComplete: boolean) =>
          handleComplete('userName', isComplete)
        }
      />
      <CVCField
        handleInput={handleInputValue}
        handleComplete={(isComplete: boolean) =>
          handleComplete('cvc', isComplete)
        }
      />
      <PasswordField
        handleInput={handleInputValue}
        handleComplete={(isComplete: boolean) =>
          handleComplete('password', isComplete)
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
