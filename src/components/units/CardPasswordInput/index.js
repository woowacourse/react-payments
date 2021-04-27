import React, { useRef } from 'react';
import RegisterInputWrapper from '../../shared/RegisterInputWrapper';
import EllipseSvg from '../../../assets/secure-ellipse-cyan.svg';
import * as Style from './style';

const CardPasswordInput = (props) => {
  const { type, label, width, setCardPassword } = props;

  const firstInput = useRef(null);
  const secondInput = useRef(null);

  const passwordMark = Array.from({ length: 2 }).map((_, idx) => (
    <Style.PasswordMark key={idx}>
      <img src={EllipseSvg} alt="password-mark" />
    </Style.PasswordMark>
  ));

  const handleChangeNumbers = (event) => {
    const currentValue = event.target.value;
    const index = Number(event.target.dataset.passwordIdx);

    if (isNaN(currentValue)) return;

    if (index === 1) {
      moveFocusToNextFragment();
    } else if (index === 2) {
      if (currentValue.length > 1) return;
    }

    setCardPassword((prevPassword) => ({ ...prevPassword, [index]: currentValue }));
  };

  const moveFocusToNextFragment = () => {
    secondInput.current.focus();
  };

  return (
    <>
      <RegisterInputWrapper type={type} label={label} width={width} inputCount={2}>
        <Style.InputWrapper>
          <Style.PasswordInput
            type="password"
            width="20px"
            data-password-idx="1"
            onChange={handleChangeNumbers}
            ref={firstInput}
          />
        </Style.InputWrapper>
        <Style.InputWrapper>
          <Style.PasswordInput
            type="password"
            width="20px"
            data-password-idx="2"
            onChange={handleChangeNumbers}
            ref={secondInput}
          />
        </Style.InputWrapper>
        {passwordMark}
      </RegisterInputWrapper>
    </>
  );
};

export default CardPasswordInput;
