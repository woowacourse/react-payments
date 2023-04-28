import {
  ExpirationDateInput,
  OwnerNameInput,
  SecurityCodeInput,
  PasswordInput,
  CardNumberInputs,
} from 'components/Input';
import styled from 'styled-components';
import { ChangeEventHandler, FormEventHandler, useContext, useEffect, useState } from 'react';
import { Container } from 'components/style/InputContainer';
import { COMPANY_NAME, Card } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { CreditCard } from 'components/common/Card/CreditCard';
import { useCardFormValid } from 'hooks/useCardFormValid';
import { Modal } from 'components/Modal/CardCompanyModal';
import { COMPANY_LIST, ICON_SVG_PATH } from '../../constants';
import { CardFormContext, defaultCardForm } from 'context/CardForm';

export type AddCardFormProps = {
  onSubmit: () => void;
};

const NOT_ALPHABET_REGEX = /[^A-Za-z\s]/gi;

function AddCardForm({ onSubmit }: AddCardFormProps) {
  const { setNewCard } = useContext(CardFormContext);
  const [card, setCard] = useState<Card>(defaultCardForm);

  const [isOpen, setIsOpen] = useState(true);

  const [isValid, errorMessages] = useCardFormValid(card);

  useEffect(() => {
    setNewCard(card);
  }, [isValid]);

  const valueAndOnChanges: ValueAndOnChange[] = card.numbers.map((cardNumber, index) => ({
    value: cardNumber,
    onChange: (e) => {
      const { value } = e.target;

      setCard((prev) => {
        const prevCardNumbers = [...prev.numbers];
        prevCardNumbers.splice(index, 1, value);

        return { ...prev, numbers: prevCardNumbers };
      });
    },
  }));

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
          names={COMPANY_LIST}
          onClick={handleClickCompany}
        />
      )}
      <CardWrapper>
        <CreditCard card={card} onClick={handleClickCompany} />
      </CardWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <InputLabel>카드 번호</InputLabel>
        <CardNumberContainer>
          <CardNumberInputs valueAndOnChanges={valueAndOnChanges} />
        </CardNumberContainer>
        {<ErrorCaption>{!isValid && errorMessages.numbers}</ErrorCaption>}
        <InputLabel>만료일</InputLabel>

        <ExpirationDateContainer>
          <ExpirationDateInput
            month={{ value: card.expirationDate.month, onChange: handleMonthInputChange }}
            year={{ value: card.expirationDate.year, onChange: handleYearInputChange }}
          />
        </ExpirationDateContainer>
        {<ErrorCaption>{!isValid && errorMessages.expirationDate}</ErrorCaption>}

        <OwnerNameLabelContainer>
          <InputLabel>카드 소유자 이름(선택)</InputLabel>
          <InputLabel>{`${card.ownerName.length} / 30`}</InputLabel>
        </OwnerNameLabelContainer>
        <OwnerNameInputContainer>
          <OwnerNameInput value={card.ownerName} onChange={handleOwnerNameInputChange} />
        </OwnerNameInputContainer>

        <InputLabel>보안 코드(CVC/CVV)</InputLabel>
        <SecurityCodeContainer>
          <SecurityCodeInputContainer>
            <SecurityCodeInput value={card.securityCode} onChange={handleSecurityCodeChange} />
          </SecurityCodeInputContainer>
          <SecurityCodeButton>?</SecurityCodeButton>
          <SecurityCodeNotification>
            카드 뒷면의 CVC 번호 3자리 숫자를 입력해주세요
          </SecurityCodeNotification>
        </SecurityCodeContainer>
        {<ErrorCaption>{!isValid && errorMessages.securityCode}</ErrorCaption>}

        <InputLabel>카드 비밀번호</InputLabel>
        <PasswordInputContainer>
          <PasswordInput
            first={{ value: card.password.first, onChange: handleFirstPasswordInputChange }}
            second={{ value: card.password.second, onChange: handleSecondPasswordInputChange }}
          />
          <DotContainer>•</DotContainer>
          <DotContainer>•</DotContainer>
        </PasswordInputContainer>
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

const InputLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: -0.085em;
  color: var(--primary-text-color);
  margin-top: 16px;
  margin-bottom: 3px;
`;

const CardNumberContainer = styled(Container)`
  justify-content: center;
  width: 318px;
  Input {
    width: 15%;
    text-align: center;
  }
`;

const ExpirationDateContainer = styled(Container)`
  width: 137px;
  justify-content: center;
  Input {
    text-align: center;
  }
`;

const OwnerNameInputContainer = styled(Container)`
  width: 318px;
  margin-bottom: 16px;
`;

const SecurityCodeInputContainer = styled(Container)`
  width: 84px;

  Input {
    text-align: center;
    margin-left: 0.5rem;
    letter-spacing: 0.5rem;
  }
`;

const PasswordInputContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0);
  width: 60%;
  padding: 0;
  align-items: center;
  Input {
    width: 44px;
    height: 44px;
    text-align: center;
    background-color: var(--primary-color);
    margin-right: 7px;
    border-radius: 7px;
  }
`;

const DotContainer = styled.div`
  padding: 0 20px;
  font-size: 19px;
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

const OwnerNameLabelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
`;

const ErrorCaption = styled.span`
  height: 10px;
  margin-top: 5px;
  font-size: 10px;
  color: var(--error-text-color);
`;

const SecurityCodeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

const SecurityCodeButton = styled.span`
  border-radius: 50%;
  border: 2px solid #bababa;
  width: 27px;
  height: 27px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  color: var(--grey-text-color);

  :hover + span {
    display: block;
  }
`;

const SecurityCodeNotification = styled.span`
  display: none;
  width: 170px;
  padding: 0 2px;
  border-radius: 7px;
  border: 2px solid var(--light-gray-text-color);
  font-weight: 600;
  color: var(--gray-text-color);
`;

export default AddCardForm;
