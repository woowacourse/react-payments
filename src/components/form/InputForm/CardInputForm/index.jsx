import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFormComplete } from '../../../../hooks/useFormComplete';
import { checkFormCompletion, checkFormValidation } from '../../../../utils/validation/form';
import InputContainer from '../../InputContainer/TypeInputContainer';
import { uid } from 'react-uid';
import Position from '../../../commons/Position';
import Modal from '../../../commons/Modal';
import CardCompanySelect from '../../CardCompanySelect';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../../../types';
import VirtualKeyboard from '../../VirtualKeyboard';
import { useModal } from '../../../../hooks/useModal';
import { useAutoFocusForm } from '../../../../hooks/useAutoFocusForm';
import { useVirtualKeyboard } from '../../../../hooks/useVirtualKeyboard';

function CardInputForm({ cardInput, cardInputDispatch, formSubmitAction, getInputState }) {
  const [
    { isShowVirtualKeyboard, inputElementKey, inputElementMaxLength },
    openVirtualKeyboard,
    closeVirtualKeyboard,
  ] = useVirtualKeyboard();

  const [isShowModal, openModal, closeModal] = useModal();

  const [setInputElement, nextInputFocus] = useAutoFocusForm();

  const isComplete = useFormComplete(cardInput, checkFormCompletion);

  const onSubmitInputForm = e => {
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
      {Object.keys(cardInput).map(key => {
        const TypeInputContainer = InputContainer[key];
        if (key === 'cardType') {
          return;
        }
        return (
          <TypeInputContainer
            key={uid(key)}
            state={cardInput[key]}
            stateName={key}
            cardInputDispatch={cardInputDispatch}
            isShowVirtualKeyboard={isShowVirtualKeyboard}
            openVirtualKeyboard={openVirtualKeyboard}
            closeVirtualKeyboard={closeVirtualKeyboard}
            setInputElement={setInputElement}
            nextInputFocus={nextInputFocus}
          />
        );
      })}

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
            elementKey={inputElementKey}
            elementState={getInputState(inputElementKey)}
            maxLength={inputElementMaxLength}
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
