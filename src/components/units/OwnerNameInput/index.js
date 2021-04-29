import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import * as Style from './style';

const OwnerNameInput = (props) => {
  const { type, label, width, ownerName, setOwnerName } = props;
  const [isInputValid, setInputValid] = useState(true);

  const isEnglish = (char) => !/[^A-Za-z\s]/g.test(char);

  const isValidLength = (value) => value.length <= 30;

  const handleChangeName = (event) => {
    const currentValue = event.target.value;

    if (!isEnglish(currentValue)) {
      setInputValid(false);

      return;
    }
    if (!isValidLength(currentValue)) return;

    setInputValid(true);
    setOwnerName(currentValue.toUpperCase());
  };

  return (
    <Style.Root>
      <RegisterInputWrapper type={type} label={label} width={width} currentNameLength={ownerName.length}>
        <Style.InputWrapper isValid={isInputValid}>
          <Style.Input
            width="302px"
            aria-label="owner-name-input"
            placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
            value={ownerName}
            onChange={handleChangeName}
          />
        </Style.InputWrapper>
      </RegisterInputWrapper>
      <Style.ErrorMessage isValid={isInputValid}>이름은 영어로만 입력해주세요</Style.ErrorMessage>
    </Style.Root>
  );
};

OwnerNameInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  ownerName: PropTypes.string.isRequired,
  setOwnerName: PropTypes.func.isRequired,
};

export default OwnerNameInput;
