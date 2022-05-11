import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../../Input/TextInput';
import LabelInputContainer from '../../LabelInputContainer';
import { isAlphabetOrSpace } from '../../../../../utils/validation';

function OwnerNameInputContainer({
  state,
  stateName,
  cardInputDispatch,
  closeVirtualKeyboard,
  setInputElement,
  nextInputFocus,
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
        inputElementKey={stateName}
        closeVirtualKeyboard={closeVirtualKeyboard}
        setInputElement={setInputElement}
        nextInputFocus={nextInputFocus}
      />
    </LabelInputContainer>
  );
}

OwnerNameInputContainer.propTypes = {
  state: PropTypes.string,
  stateName: PropTypes.string,
  cardInputDispatch: PropTypes.func,
  closeVirtualKeyboard: PropTypes.func,
  setInputElement: PropTypes.func,
  nextInputFocus: PropTypes.func,
};

export default OwnerNameInputContainer;
