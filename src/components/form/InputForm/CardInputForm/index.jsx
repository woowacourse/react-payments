import React, { useRef, useState } from 'react';
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

function CardInputForm({ cardInput, cardInputDispatch, formSubmitAction }) {
  const [{ isShow, elementKey }, setIsShowVirtualKeyboard] = useState({
    isShow: false,
    elementKey: null,
  });

  const [isShowModal, openModal, closeModal] = useModal();

  const isComplete = useFormComplete(cardInput, checkFormCompletion);

  const inputElementsRef = useRef({});

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
            cardInputDispatch={cardInputDispatch}
            inputElementsRef={inputElementsRef}
            stateName={key}
            setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
          />
        );
      })}

      <Position position="absolute" right="20px">
        <button className="button-box" disabled={isComplete === false}>
          <span className="button-text">다음</span>
        </button>
      </Position>

      <Position position="absolute" bottom="0" left="0">
        {isShow ? (
          <VirtualKeyboard
            inputElementsRef={inputElementsRef}
            elementKey={elementKey}
            cardInputDispatch={cardInputDispatch}
            setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
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
};

export default CardInputForm;
