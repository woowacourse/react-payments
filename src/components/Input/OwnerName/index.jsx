import React from 'react';
import { isAlphabetOrSpace } from '../../../utils/validations';
import PropTypes from 'prop-types';
import Input from '..';

function OwnerNameInput({ ownerName, cardInputDispatch, inputElementsRef, startIndex }) {
  const onChangeOwnerName = (e, index) => {
    const {
      target: { value: ownerName, maxLength },
    } = e;

    if (isAlphabetOrSpace(ownerName)) {
      cardInputDispatch({
        type: 'CHANGE_OWNER_NAME',
        payload: { ownerName: ownerName.toUpperCase() },
      });
    }

    if (ownerName.length === maxLength) {
      inputElementsRef.current[index + 1]?.focus();
    }
  };

  return (
    <Input labelTitle="카드 소유자 이름(선택)">
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={ownerName}
        onChange={e => onChangeOwnerName(e, startIndex)}
        maxLength={30}
        ref={element => (inputElementsRef.current[startIndex] = element)}
      />
    </Input>
  );
}
OwnerNameInput.propTypes = {
  ownerName: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  startIndex: PropTypes.number,
};
export default OwnerNameInput;
