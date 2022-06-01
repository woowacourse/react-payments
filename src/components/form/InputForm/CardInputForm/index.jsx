import React from 'react';
import PropTypes from 'prop-types';
import { useFormComplete } from '../../../../hooks/useFormComplete.ts';
import { checkFormCompletion, checkFormValidation } from '../../../../utils/validation/form';
import Position from '../../../commons/Position';
import Modal from '../../../commons/Modal';
import CardCompanySelect from '../../CardCompanySelect';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../../../types';
import VirtualKeyboard from '../../VirtualKeyboard';
import { useModal } from '../../../../hooks/useModal';
import { useAutoFocusForm } from '../../../../hooks/useAutoFocusForm';
import { useVirtualKeyboard } from '../../../../hooks/useVirtualKeyboard';
import CardNumberInputContainer from '../../InputContainer/TypeInputContainer/CardNumber';
import ExpirationDateInputContainer from '../../InputContainer/TypeInputContainer/ExpirationDate';
import OwnerNameInputContainer from '../../InputContainer/TypeInputContainer/OwnerName';
import PasswordInputContainer from '../../InputContainer/TypeInputContainer/Password';
import SecurityCodeInputContainer from '../../InputContainer/TypeInputContainer/SecurityCode';

function CardInputForm({ cardInput, cardInputDispatch, formSubmitAction, getInputState }) {
  const [
    { element: focusElement, elementKey: focusElementKey },
    isShowVirtualKeyboard,
    openVirtualKeyboard,
    closeVirtualKeyboard,
  ] = useVirtualKeyboard();

  const [isShowModal, openModal, closeModal] = useModal();

  const [setInputElement, nextInputFocus] = useAutoFocusForm();

  const isComplete = useFormComplete(cardInput, checkFormCompletion);

  const onSubmitInputForm = (e) => {
    e.preventDefault();

    const { cardNumber, expirationDate, ownerName, securityCode, password, cardType } = cardInput;

    try {
      if (checkFormValidation({ expirationDate })) {
        formSubmitAction({
          cardInput: { cardNumber, expirationDate, ownerName, securityCode, password, cardType },
        });
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  const onClickCardSelectButton = () => {
    openModal();
  };

  return (
    <form className="card-input-form scroll-form" onSubmit={onSubmitInputForm}>
      <CardNumberInputContainer
        state={cardInput.cardNumber}
        stateName="cardNumber"
        cardInputDispatch={cardInputDispatch}
        openVirtualKeyboard={openVirtualKeyboard}
        closeVirtualKeyboard={closeVirtualKeyboard}
        setInputElement={setInputElement}
        nextInputFocus={nextInputFocus}
      />

      <ExpirationDateInputContainer
        state={cardInput.expirationDate}
        stateName="expirationDate"
        cardInputDispatch={cardInputDispatch}
        closeVirtualKeyboard={closeVirtualKeyboard}
        setInputElement={setInputElement}
        nextInputFocus={nextInputFocus}
      />

      <OwnerNameInputContainer
        state={cardInput.ownerName}
        stateName="ownerName"
        cardInputDispatch={cardInputDispatch}
        closeVirtualKeyboard={closeVirtualKeyboard}
        setInputElement={setInputElement}
        nextInputFocus={nextInputFocus}
      />

      <SecurityCodeInputContainer
        state={cardInput.securityCode}
        stateName="securityCode"
        openVirtualKeyboard={openVirtualKeyboard}
        closeVirtualKeyboard={closeVirtualKeyboard}
        setInputElement={setInputElement}
        nextInputFocus={nextInputFocus}
      />

      <PasswordInputContainer
        state={cardInput.password}
        stateName="password"
        openVirtualKeyboard={openVirtualKeyboard}
        closeVirtualKeyboard={closeVirtualKeyboard}
        setInputElement={setInputElement}
        nextInputFocus={nextInputFocus}
      />

      <Position position="absolute" right="20px">
        <button className="button-box" disabled={isComplete === false}>
          <span className="button-text">다음</span>
        </button>
      </Position>
      <Position position="absolute" bottom="0" left="0">
        {isShowVirtualKeyboard ? (
          <VirtualKeyboard
            cardInputDispatch={cardInputDispatch}
            closeVirtualKeyboard={closeVirtualKeyboard}
            nextInputFocus={nextInputFocus}
            element={focusElement}
            elementKey={focusElementKey}
            elementState={getInputState(focusElementKey)}
          />
        ) : (
          <div className="flex-center" style={{ width: '240px', height: '160px', padding: '20px' }}>
            <button type="button" className="button-normal" onClick={onClickCardSelectButton}>
              카드사 선택하기
            </button>
          </div>
        )}
      </Position>
      {isShowModal && (
        <Modal closeModal={closeModal}>
          <div className="modal">
            <CardCompanySelect closeModal={closeModal} cardInputDispatch={cardInputDispatch} />
          </div>
        </Modal>
      )}
    </form>
  );
}

CardInputForm.propTypes = {
  cardInput: PropTypes.shape({
    cardNumber: CARD_NUMBER_TYPE,
    expirationDate: EXPIRATION_DATE_TYPE,
    ownerName: PropTypes.string,
    securityCode: PropTypes.string,
    password: PASSWORD_TYPE,
    cardType: PropTypes.string,
  }),
  cardInputDispatch: PropTypes.func,
  formSubmitAction: PropTypes.func,
  getInputState: PropTypes.func,
};

export default CardInputForm;
