import { useState } from 'react';
import styled from 'styled-components';
import { HIDDEN_ELEMENT_STYLE, LENGTH, REGEX } from 'constants/constants';
import { useInputHandler } from 'hooks/useInputHandler';
import { StyledInput } from 'components/Input';
import InputBox from 'components/InputBox';
import { StyledCaption } from 'components/Caption';

const PasswordInput = () => {
  const [password, setPassword] = useState({
    password1: '',
    password2: '',
  });

  const { handleInput: handlePassword, handleRef: handleInputRef } =
    useInputHandler(setPassword, {
      length: LENGTH.EACH_PASSWORD,
      regex: REGEX.ONLY_NUMBER,
    });

  return (
    <>
      <label className="label-text" htmlFor="password-label">
        카드 비밀번호
      </label>
      <InputBox>
        <StyledPasswordInput
          type="password"
          name="password1"
          id="password-label"
          maxLength={LENGTH.EACH_PASSWORD}
          inputMode="numeric"
          value={password.password1}
          ref={(el) => handleInputRef(el, 0)}
          onChange={handlePassword}
          placeholder="0"
          required
        />
        <StyledPasswordInput
          type="password"
          name="password2"
          maxLength={LENGTH.EACH_PASSWORD}
          inputMode="numeric"
          value={password.password2}
          ref={(el) => handleInputRef(el, 1)}
          onChange={handlePassword}
          placeholder="0"
          required
        />
        <HiddenPassword type="text" inputMode="numeric" value={'ㆍ'} disabled />
        <HiddenPassword type="text" inputMode="numeric" value={'ㆍ'} disabled />
      </InputBox>
      <PasswordCaption password={Object.values(password)}>
        카드 비밀번호 앞 2자리를 입력해 주세요.
      </PasswordCaption>
    </>
  );
};

const StyledPasswordInput = styled(StyledInput)`
  width: 12vw;
  font-size: 16px;
`;

const HiddenPassword = styled(StyledInput)`
  width: 12vw;
  margin-right: 2.2vw;
  font-size: 30px;
  text-align: center;
  line-height: 48px;
  border-radius: 8px;
`;

const PasswordCaption = styled(StyledCaption)<{ password: string[] }>`
  visibility: ${({ password }) =>
    (password.join('').length === LENGTH.EACH_PASSWORD * 2 ||
      password.join('').length === 0) &&
    `${HIDDEN_ELEMENT_STYLE}`};
`;

export default PasswordInput;
