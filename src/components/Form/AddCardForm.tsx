import {
  ExpirationDateInput,
  OwnerNameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
} from 'components/Input';
import styled from 'styled-components';
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useEffect,
  useState,
} from 'react';
import { COMPANY_NAME, Card } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { CreditCard } from 'components/common/Card/CreditCard';
import { useCardFormValid } from 'hooks/useCardFormValid';
import { Modal } from 'components/Modal/CardCompanyModal';
import { COMPANY_LIST, ICON_SVG_PATH } from '../../constants';
import { CardFormContext, defaultCardForm } from 'context/CardForm';
import FormLabel from 'components/common/FormLabel/FormLabel';

export type AddCardFormProps = {
  onSubmit: () => void;
};

const NOT_ALPHABET_REGEX = /[^A-Za-z\s]/gi;

function AddCardForm({ onSubmit }: AddCardFormProps) {
  const { setCardForm } = useContext(CardFormContext);
  const [card, setCard] = useState<Card>(defaultCardForm);

  const [isOpen, setIsOpen] = useState(true);

  const [isValid, errorMessages] = useCardFormValid(card);

  useEffect(() => {
    setCardForm(card);
  }, [isValid]);

  const handleCardNumbersChange: ValueAndOnChange[] = card.numbers.map((cardNumber, index) => ({
    value: cardNumber,
    onChange: (e) => {
      handleCardNumberChange(e, index);
    },
  }));

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { value } = e.target;

    setCard((prev) => {
      const prevCardNumbers = [...prev.numbers];
      prevCardNumbers.splice(index, 1, value);

      return { ...prev, numbers: prevCardNumbers };
    });
  };

  const handleMonthInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCard((prev) => ({
      ...prev,
      expirationDate: { month: value, year: prev.expirationDate.year },
    }));
  };

  const handleYearInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCard((prev) => ({
      ...prev,
      expirationDate: { month: prev.expirationDate.month, year: value },
    }));
  };

  const handleOwnerNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(NOT_ALPHABET_REGEX, '').toUpperCase();

    setCard((prev) => ({
      ...prev,
      ownerName: value,
    }));
  };

  const handleSecurityCodeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCard((prev) => ({
      ...prev,
      securityCode: value,
    }));
  };

  const handleFirstPasswordInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCard((prev) => ({ ...prev, password: { first: value, second: prev.password.second } }));
  };

  const handleSecondPasswordInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCard((prev) => ({ ...prev, password: { first: prev.password.first, second: value } }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const handleClickCompany = (bank: COMPANY_NAME) => {
    setCard((prev) => ({ ...prev, bank: bank }));
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <Modal
          ImgSources={Object.values(ICON_SVG_PATH) as string[]}
          companyNames={COMPANY_LIST}
          onClick={handleClickCompany}
        />
      )}
      <CardWrapper>
        <CreditCard card={card} onClick={handleClickCompany} />
        <FormLabel>카드 이미지를 터치하여 카드사를 변경할 수 있습니다.</FormLabel>
      </CardWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <CardNumberInputs valueAndOnChanges={handleCardNumbersChange} />
        {<ErrorCaption>{!isValid && errorMessages.numbers}</ErrorCaption>}

        <ExpirationDateInput
          month={{ value: card.expirationDate.month, onChange: handleMonthInputChange }}
          year={{ value: card.expirationDate.year, onChange: handleYearInputChange }}
        />
        {<ErrorCaption>{!isValid && errorMessages.expirationDate}</ErrorCaption>}

        <OwnerNameInput value={card.ownerName} onChange={handleOwnerNameInputChange} />

        <SecurityCodeInput value={card.securityCode} onChange={handleSecurityCodeChange} />
        {<ErrorCaption>{!isValid && errorMessages.securityCode}</ErrorCaption>}

        <PasswordInput
          first={{ value: card.password.first, onChange: handleFirstPasswordInputChange }}
          second={{ value: card.password.second, onChange: handleSecondPasswordInputChange }}
        />
        {<ErrorCaption>{!isValid && errorMessages.password}</ErrorCaption>}

        {isValid && <FormSubmitButton type="submit">다음</FormSubmitButton>}
      </FormContainer>
    </>
  );
}

const CardWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  Label {
    margin-bottom: 12px;
  }
`;

const FormSubmitButton = styled.button`
  border: none;
  font-size: 16px;
  font-weight: 700;
  background-color: white;
  margin-left: auto;
  color: black;
  cursor: pointer;
`;

const ErrorCaption = styled.span`
  height: 10px;
  margin-top: 5px;
  font-size: 10px;
  color: var(--error-text-color);
`;

export default AddCardForm;
