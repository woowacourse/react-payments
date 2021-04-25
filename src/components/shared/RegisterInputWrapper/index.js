import React from 'react';
import PropTypes from 'prop-types';
import INPUT_TYPE from '../../../constants/inputType';
import helpSvg from '../../../assets/cvc-help.svg';
import EllipseSvg from '../../../assets/secure-ellipse-cyan.svg';
import * as Style from './style';

const RegisterInputWrapper = (props) => {
  const isOwnerName = props.type === INPUT_TYPE.OWNER_NAME.type;
  const wordCount = <Style.WordCount>0/30</Style.WordCount>;

  const isSecureCode = props.type === INPUT_TYPE.SECURE_CODE.type;
  const helpMark = <Style.HelpMark src={helpSvg} alt="help" />;

  const isCardPassword = props.type === INPUT_TYPE.PASSWORD.type;
  const passwordMark = Array.from({ length: 2 }).map((_, idx) => (
    <Style.PasswordMark key={idx}>
      <img src={EllipseSvg} alt="password-mark" />
    </Style.PasswordMark>
  ));

  return (
    <Style.Root>
      {/* TODO: cardPassword일 때 inputHeader width 조정하기 */}
      <Style.InputHeader width={isCardPassword ? '100%' : props.width}>
        <Style.Label htmlFor={props.type}>{props.label}</Style.Label>
        {isOwnerName && wordCount}
      </Style.InputHeader>
      <Style.FlexContainer>
        {Array.from({ length: props.inputCount }).map((_, idx) => (
          <Style.InputWrapper width={props.width} key={idx} isMultiple={props.type === INPUT_TYPE.PASSWORD.type}>
            {props.children}
          </Style.InputWrapper>
        ))}
        {isSecureCode && helpMark}
        {isCardPassword && passwordMark}
      </Style.FlexContainer>
    </Style.Root>
  );
};

RegisterInputWrapper.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  inputCount: PropTypes.number,
};

RegisterInputWrapper.defaultProps = {
  inputCount: 1,
};

export default RegisterInputWrapper;
