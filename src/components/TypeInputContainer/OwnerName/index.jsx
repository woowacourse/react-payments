import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../Input/TextInput';
import LabelInputContainer from '../../LabelInputContainer';
import { isAlphabetOrSpace } from '../../../utils/validation';

function OwnerNameInputContainer({
  state,
  cardInputDispatch,
  inputElementsRef,
  stateName,
  setIsShowVirtualKeyboard,
}) {
  const onChangeOwnerName = e => {
    const {
      target: { value: ownerName },
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
      <TextInput
        id={`${stateName}`}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={state}
        maxLength={30}
        onChange={onChangeOwnerName}
        inputElementsRef={inputElementsRef}
        inputElementKey={stateName}
        setIsShowVirtualKeyboard={setIsShowVirtualKeyboard}
      />
    </LabelInputContainer>
  );
}

OwnerNameInputContainer.propTypes = {
  state: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  inputElementsRef: PropTypes.object,
  stateName: PropTypes.string,
  setIsShowVirtualKeyboard: PropTypes.func,
};

export default OwnerNameInputContainer;
