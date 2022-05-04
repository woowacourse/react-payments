import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../../types';
import { useFormComplete } from '../../../hooks/useFormComplete';
import InputContainer from '../../TypeInputContainer';
import { uid } from 'react-uid';
import { objectToString } from '../../../utils/util';
import { checkFormCompletion, checkFormValidation } from '../../../utils/validation/form';
import VirtualKeyboard from '../../VirtualKeyboard';
import Position from '../../commons/Position';
import Modal from '../../commons/Modal';
import SelectCard from '../../SelectCard';

function CardInputForm({ cardInput, cardInputDispatch }) {
  const [isShowModal, setIsShowModal] = useState(false);

  const [{ isShow, elementKey }, setIsShowVirtualKeyboard] = useState({
    isShow: false,
    elementKey: null,
  });

  const isComplete = useFormComplete(cardInput, checkFormCompletion);

  const inputElementsRef = useRef({});

  const onSubmitInputForm = e => {
    e.preventDefault();

    const { cardNumber, expirationDate, ownerName, securityCode, password } = cardInput;

    try {
      if (checkFormValidation({ expirationDate })) {
        alert(`카드 번호는 ${objectToString({ targetObject: cardNumber })} 입니다 \n
        만료일 ${objectToString({ targetObject: expirationDate, separator: '/' })} 입니다 \n
        카드 소유자 이름 ${ownerName} 입니다 \n
        보안코드 ${securityCode} 입니다 \n
        비밀번호 ${objectToString({ targetObject: password })} \n`);
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  const onClickCardSelectButton = () => {
    setIsShowModal(true);
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
        <Modal setIsShowModal={setIsShowModal}>
          <div className="modal">
            <SelectCard setIsShowModal={setIsShowModal} cardInputDispatch={cardInputDispatch} />
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
  }),
  cardInputDispatch: PropTypes.func,
};

export default CardInputForm;
