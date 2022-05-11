import React, { useEffect, useContext, useState, useRef } from 'react';
import LabeledInput from '../Common/Input/LabeledInput';
import SubmitButton from '../Common/Button/SubmitButton';
import PropTypes from 'prop-types';
import { isAlphabetOrSpace } from '../../utils/validations';
import { uid } from 'react-uid';
import {
  checkFormCompletion,
  checkFormValidation,
  checkUniqueCard,
  isNumberInRange,
} from './validation';
import { DEFAULT_CARD_INFO, MAX_LENGTH } from '../../constants';
import { CardContext, PageContext } from '../../context';
import useInputs from '../../hooks';

function CardBasicInfoForm() {
  const { cardList, setCardInput } = useContext(CardContext);
  const { setPage } = useContext(PageContext);
  const [isComplete, setIsComplete] = useState(false);
  const inputElementsRef = useRef(new Map());
  const [form, onChange, reset] = useInputs(DEFAULT_CARD_INFO);
  const { cardNumber, expirationDate, ownerName, securityCode, password } = form;

  const handleChangeInputs = (e, validationFunc, dataType, key) => {
    const {
      target: { value: changedData, maxLength },
    } = e;
    onChange(e, validationFunc, dataType, key);

    if (changedData.length === maxLength) {
      focusNextInput(e.target);
    }
    setCardInput({ ...form });
  };

  const nodePushRef = (id, node) => {
    inputElementsRef.current.set(id, node);
  };

  const focusNextInput = node => {
    const refArray = Array(...inputElementsRef.current.values());
    const nextIndex = refArray.indexOf(node) + 1;
    const nextInput = refArray[nextIndex];
    if (nextInput) {
      nextInput.focus();
    }
  };

  const onClickNextButton = e => {
    e.preventDefault();

    try {
      if (checkFormValidation({ expirationDate }) && checkUniqueCard(cardNumber, cardList)) {
        setPage('completeAddCardPage');
        reset(DEFAULT_CARD_INFO);
      }
    } catch ({ message }) {
      alert(message);
    }
  };

  useEffect(() => {
    try {
      if (checkFormCompletion({ form })) {
        setIsComplete(true);
      }
    } catch (e) {
      setIsComplete(false);
    }
  }, [cardNumber, expirationDate, securityCode, password]);

  return (
    <form onSubmit={onClickNextButton}>
      <LabeledInput labelTitle="카드번호">
        {Object.keys(cardNumber).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type={stateKey === 'firstColumn' || stateKey === 'secondColumn' ? 'text' : 'password'}
            value={cardNumber[stateKey]}
            onChange={e => handleChangeInputs(e, isNumberInRange, 'cardNumber', stateKey)}
            maxLength={MAX_LENGTH.CARD_NUMBER}
            required
            data-testid={stateKey}
            ref={nodePushRef.bind(this, stateKey)}
          />
        ))}
      </LabeledInput>
      <LabeledInput labelTitle="만료일" inputSize="w-50">
        {Object.keys(expirationDate).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type="text"
            placeholder={stateKey === 'month' ? 'MM' : 'YY'}
            value={expirationDate[stateKey]}
            onChange={e => handleChangeInputs(e, isNumberInRange, 'expirationDate', stateKey)}
            maxLength={MAX_LENGTH.CARD_EXPIRATION_DATE}
            required
            data-testid={stateKey}
            ref={nodePushRef.bind(this, stateKey)}
          />
        ))}
      </LabeledInput>
      <LabeledInput labelTitle="카드 소유자 이름(선택)">
        <input
          type="text"
          className="input-basic"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          value={ownerName}
          onChange={e => handleChangeInputs(e, isAlphabetOrSpace, 'ownerName')}
          maxLength={MAX_LENGTH.CARD_OWNER_NAME}
          data-testid="ownerName"
          ref={nodePushRef.bind(this, 'ownerName')}
        />
      </LabeledInput>
      <LabeledInput
        labelTitle="보안코드(CVC/CVV)"
        inputSize="w-25"
        helpText="카드 뒷면 서명란 또는 신용카드 번호 오른쪽 상단에 기재된 3자리 숫자"
      >
        <input
          className="input-basic"
          type="password"
          value={securityCode}
          onChange={e => handleChangeInputs(e, isNumberInRange, 'securityCode')}
          maxLength={MAX_LENGTH.CARD_SECURITY_CODE}
          required
          data-testid="securityCode"
          ref={nodePushRef.bind(this, 'securityCode')}
        />
      </LabeledInput>
      <LabeledInput labelTitle="카드 비밀번호" inputSize="w-50">
        {Object.keys(password).map(stateKey => (
          <input
            key={uid(stateKey)}
            className="input-basic"
            type="text"
            value={password[stateKey]}
            onChange={e => handleChangeInputs(e, isNumberInRange, 'password', stateKey)}
            maxLength={MAX_LENGTH.CARD_PASSWORD}
            required
            data-testid={stateKey}
            ref={nodePushRef.bind(this, stateKey)}
          />
        ))}
        <div className="inputted-password">*</div>
        <div className="inputted-password">*</div>
      </LabeledInput>
      {isComplete && <SubmitButton>다음</SubmitButton>}
    </form>
  );
}

CardBasicInfoForm.propTypes = {
  handleChangePage: PropTypes.func,
};
export default CardBasicInfoForm;
