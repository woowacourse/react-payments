import React from 'react';
import { isAlphabetOrSpace } from '../../../utils/validations';
import PropTypes from 'prop-types';
import { findNotCompletedInput } from '../../../utils/util';
import InputContainer from '..';

function OwnerNameInput({ ownerName, cardInputDispatch, inputElementsRef, stateName }) {
  const onChangeOwnerName = e => {
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
      const { current: inputElementsMap } = inputElementsRef;

      const {
        nextInput: { element },
      } = findNotCompletedInput(inputElementsMap, stateName);

      inputElementsMap[stateName].isComplete = true;

      element?.focus();
    }
  };

  return (
    <InputContainer labelTitle="카드 소유자 이름(선택) (영문만 입력가능)">
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={ownerName}
        onChange={onChangeOwnerName}
        maxLength={30}
        ref={element => {
          const { current } = inputElementsRef;

          current[stateName] = {
            element,
            isComplete: element?.value.length !== 0,
          };
        }}
      />
    </InputContainer>
  );
}
OwnerNameInput.propTypes = {
  ownerName: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
};
export default OwnerNameInput;
