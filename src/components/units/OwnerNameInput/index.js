import React from 'react';
import PropTypes from 'prop-types';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import * as Style from './style';

const OwnerNameInput = (props) => {
  const { type, label, width, ownerName, setOwnerName } = props;
  const isEnglish = (char) => !/[^A-Za-z\s]/g.test(char);
  const isValidLength = (value) => value.length <= 30;

  const handleChangeName = (event) => {
    const currentValue = event.target.value;
    if (!isEnglish(currentValue)) return;
    if (!isValidLength(currentValue)) return;

    setOwnerName(currentValue.toUpperCase());
  };

  return (
    <RegisterInputWrapper type={type} label={label} width={width} currentNameLength={ownerName.length}>
      <Style.InputWrapper>
        <Style.Input
          width="302px"
          placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
          value={ownerName}
          onChange={handleChangeName}
        />
      </Style.InputWrapper>
    </RegisterInputWrapper>
  );
};

OwnerNameInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  ownerName: PropTypes.string,
  setOwnerName: PropTypes.func,
};

export default OwnerNameInput;
