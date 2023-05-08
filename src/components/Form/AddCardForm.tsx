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
} from 'react';
import { COMPANY_NAME } from 'components/common/Card/types';
import { ValueAndOnChange } from 'components/Input/types';
import { CreditCard } from 'components/common/Card/CreditCard';
import { BottomSheet } from 'components/BottomSheet/BottomSheet';
import { CardInfoContext } from 'context/CardInfoContext';
import FormLabel from 'components/common/FormLabel/FormLabel';
import { ValidateForm } from 'util/ValidateForm';
import useModal from 'hooks/useModal';
import { Modal } from 'components/common/Modal/Modal';
import { useCardInfo } from 'hooks/useCardInfo';
import { filterBlankAndNotANumber } from 'util/FilterInvalidInput';
import { NOT_ALPHABET_REGEX } from '../../constants';

export type AddCardFormProps = {
  onSubmit: () => void;
};

type FocusFormInputParams = {
  formInputList: HTMLFormElement[];
  currentInput: HTMLFormElement;
  direction: number;
};

function AddCardInfo({ onSubmit }: AddCardFormProps) {
  const { cardInfo, setCardInfo } = useContext(CardInfoContext);
  const [state, dispatch] = useCardInfo(cardInfo);

  const { isModalOpen, openModal, closeModal } = useModal(true);

  const { isValid } = ValidateForm(state);

  const handleCardNumbersChange: ValueAndOnChange[] = state.numbers.map((cardNumber, index) => ({
    value: cardNumber,
    onChange: (e) => {
      handleCardNumberChange(e, index);
    },
  }));

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const { value } = e.target;

    dispatch({ type: 'SET_NUMBERS', payload: value, index: index });
  };

  const handleMonthInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    dispatch({ type: 'SET_EXPIRATION_MONTH', payload: value });
  };

  const handleYearInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    dispatch({ type: 'SET_EXPIRATION_YEAR', payload: value });
  };

  const handleOwnerNameInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(NOT_ALPHABET_REGEX, '').toUpperCase();

    dispatch({ type: 'SET_OWNER_NAME', payload: value });
  };

  const handleSecurityCodeChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    dispatch({ type: 'SET_SECURITY_CODE', payload: value });
  };

  const handleFirstPasswordInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    dispatch({ type: 'SET_FIRST_PASSWORD', payload: value });
  };

  const handleSecondPasswordInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    dispatch({ type: 'SET_SECOND_PASSWORD', payload: value });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setCardInfo(state);
    onSubmit();
  };

  const handleSelectCompany = (bank: COMPANY_NAME) => {
    dispatch({ type: 'SET_BANK', payload: bank });
    openModal();
  };

  const focusFormInput = ({ formInputList, currentInput, direction }: FocusFormInputParams) => {
    const formInputArr = [...formInputList];
    const currentIndex = formInputArr.indexOf(currentInput);
    const focusTarget = formInputArr[currentIndex + direction];

    if (!focusTarget || focusTarget.name !== currentInput.name) return;

    focusTarget.focus();
  };

  const handleMovePrevFocus: KeyboardEventHandler<HTMLFormElement> = ({ key, target }) => {
    const { form: formInputList, value } = target as HTMLFormElement;

    if (key !== 'Backspace' || value !== '') return;

    const PREV = -1;

    focusFormInput({
      formInputList: formInputList,
      currentInput: target as HTMLFormElement,
      direction: PREV,
    });
  };

  const handleMoveNextFocus: ChangeEventHandler<HTMLFormElement> = ({ target }) => {
    const { form: formInputList, maxLength, value } = target;

    const filteredInput = filterBlankAndNotANumber(value);

    if (filteredInput.length !== maxLength) return;

    const NEXT = 1;

    focusFormInput({
      formInputList: formInputList,
      currentInput: target,
      direction: NEXT,
    });
  };

  return (
    <>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <BottomSheet clickIcon={handleSelectCompany} closeModal={closeModal} />
      </Modal>

      <CardWrapper onClick={openModal}>
        <CreditCard card={state} />
        <FormLabel>카드 이미지를 터치하여 카드사를 변경할 수 있습니다.</FormLabel>
      </CardWrapper>
      <FormContainer
        onSubmit={handleSubmit}
        onChange={handleMoveNextFocus}
        onKeyDown={handleMovePrevFocus}
      >
        <CardNumberInputs valueAndOnChanges={handleCardNumbersChange} />

        <ExpirationDateInput
          onChangeMonth={handleMonthInputChange}
          onChangeYear={handleYearInputChange}
        />

        <OwnerNameInput value={state.ownerName} onChange={handleOwnerNameInputChange} />

        <SecurityCodeInput value={state.securityCode} onChange={handleSecurityCodeChange} />

        <PasswordInput
          onChangeFirst={handleFirstPasswordInputChange}
          onChangeSecond={handleSecondPasswordInputChange}
        />

        <FormSubmitButton id="card-submit-btn" type="submit" disabled={!isValid}>
          다음
        </FormSubmitButton>
      </FormContainer>
    </>
  );
}

const CardWrapper = styled.div`
  margin: 37px 0 10px 10px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormSubmitButton = styled.button`
  border: none;
  font-size: 16px;
  font-weight: 700;
  background-color: white;
  margin-left: auto;
  color: black;
  cursor: pointer;

  :disabled {
    color: var(--light-gray-text-color);
    cursor: not-allowed;
  }
`;

export const ErrorCaption = styled.span`
  height: 10px;
  margin-top: 5px;
  font-size: 10px;
  color: var(--error-text-color);
`;

export default AddCardInfo;
