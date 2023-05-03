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
  KeyboardEventHandler,
  useContext,
  useState,
} from 'react';
import { COMPANY_NAME, Card } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { CreditCard } from 'components/common/Card/CreditCard';
import { BottomSheet } from 'components/BottomSheet/BottomSheet';
import { CardInfoContext, defaultCardInfo } from 'context/CardInfoContext';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { ValidateForm } from 'util/ValidateForm';
import useModal from 'hooks/useModal';
import { Modal } from 'components/common/Modal/Modal';

export type AddCardFormProps = {
  onSubmit: () => void;
};

const NOT_ALPHABET_REGEX = /[^A-Za-z\s]/gi;
const NOT_NUMBER_REGEX = /[^0-9]/gi;

function AddCardInfo({ onSubmit }: AddCardFormProps) {
  const { setCardInfo } = useContext(CardInfoContext);
  const [card, setCard] = useState<Card>(defaultCardInfo);
  const { isModalOpen, openModal, closeModal } = useModal(true);

  const [isValid, errorMessages] = ValidateForm(card);

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
    setCardInfo(card);
    onSubmit();
  };

  const handleSelectCompany = (bank: COMPANY_NAME) => {
    setCard((prev) => ({ ...prev, bank: bank }));
    openModal();
  };

  const focusFormInput = (
    formInputList: HTMLFormElement[],
    curInput: HTMLFormElement,
    direction: number,
  ) => {
    const formInputArr = [...formInputList];
    const currentIndex = formInputArr.indexOf(curInput);
    const focusTarget = formInputArr[currentIndex + direction];

    if (!focusTarget || focusTarget.name !== curInput.name) return;

    focusTarget.focus();
  };

  const handleMovePrevFocus: KeyboardEventHandler<HTMLFormElement> = (e) => {
    const { key, target } = e;
    const { form: formInputList, value } = target as HTMLFormElement;

    if (key !== 'Backspace' || value !== '') return;

    focusFormInput(formInputList, target as HTMLFormElement, -1);
  };

  const handleMoveNextFocus: ChangeEventHandler<HTMLFormElement> = (e) => {
    const { target } = e;
    const { form: formInputList, maxLength, value } = target;

    const filteredValue = value.trim().replace(NOT_NUMBER_REGEX, '');

    if (filteredValue.length !== maxLength) return;

    focusFormInput(formInputList, target, 1);
  };

  return (
    <>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <BottomSheet onClick={handleSelectCompany} closeModal={closeModal} />
        </Modal>
      )}
      <CardWrapper onClick={openModal}>
        <CreditCard card={card} />
        <FormLabel>카드 이미지를 터치하여 카드사를 변경할 수 있습니다.</FormLabel>
      </CardWrapper>
      <FormContainer
        onSubmit={handleSubmit}
        onChange={handleMoveNextFocus}
        onKeyDown={handleMovePrevFocus}
      >
        <CardNumberInputs valueAndOnChanges={handleCardNumbersChange} />
        {<ErrorCaption>{!isValid && errorMessages.numbers}</ErrorCaption>}

        <ExpirationDateInput
          onChangeMonth={handleMonthInputChange}
          onChangeYear={handleYearInputChange}
        />
        {<ErrorCaption>{!isValid && errorMessages.expirationDate}</ErrorCaption>}

        <OwnerNameInput value={card.ownerName} onChange={handleOwnerNameInputChange} />

        <SecurityCodeInput value={card.securityCode} onChange={handleSecurityCodeChange} />
        {<ErrorCaption>{!isValid && errorMessages.securityCode}</ErrorCaption>}

        <PasswordInput
          onChangeFirst={handleFirstPasswordInputChange}
          onChangeSecond={handleSecondPasswordInputChange}
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

export default AddCardInfo;
