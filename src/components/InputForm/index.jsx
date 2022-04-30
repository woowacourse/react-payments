import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { CARD_NUMBER_TYPE, EXPIRATION_DATE_TYPE, PASSWORD_TYPE } from '../types';
import { useFormComplete } from '../../hooks/useFormComplete';
import InputContainer from '../TypeInputContainer';
import { uid } from 'react-uid';
import { objectToString } from '../../utils/util';
import { checkFormCompletion, checkFormValidation } from '../../utils/validation/form';

function InputForm({ cardInput, cardInputDispatch }) {
  const [isShowVirtualKeyboard, setIsShowVirtualKeyboard] = useState(false);

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

  return (
    <form onSubmit={onSubmitInputForm}>
      {Object.keys(cardInput).map(key => {
        const TypeInputContainer = InputContainer[key];

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

      {isComplete && (
        <button className="button-box">
          <span className="button-text">다음</span>
        </button>
      )}

      {isShowVirtualKeyboard && <div>virtual keyboard</div>}
    </form>
  );
}

InputForm.propTypes = {
  cardInput: PropTypes.shape({
    cardNumber: CARD_NUMBER_TYPE,
    expirationDate: EXPIRATION_DATE_TYPE,
    ownerName: PropTypes.string,
    securityCode: PropTypes.string,
    password: PASSWORD_TYPE,
  }),
  cardInputDispatch: PropTypes.func,
};
export default InputForm;
