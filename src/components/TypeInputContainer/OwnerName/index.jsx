import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../Input';
import LabelInputContainer from '../../LabelInputContainer';
import { isAlphabetOrSpace } from '../../../utils/validation';

function OwnerNameInput({
  state,
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
}) {
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
  };

  return (
    <LabelInputContainer
      labelTitle="카드 소유자 이름(선택) (영문만 입력가능)"
      htmlFor={`${stateName}`}
    >
      <Input
        id={`${stateName}`}
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={state}
        onChange={onChangeOwnerName}
        maxLength={30}
        inputElementsRef={inputElementsRef}
        inputElementKey={stateName}
        setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
      />
    </LabelInputContainer>
  );
}

OwnerNameInput.propTypes = {
  state: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default OwnerNameInput;
