import { useState } from 'react';
import styled from 'styled-components';
import { HIDDEN_ELEMENT_STYLE, LENGTH, REGEX } from 'constants/constants';
import { useInputHandler } from 'hooks/useInputHandler';
import { StyledInput } from 'components/Input';
import { StyledInputBox } from 'components/InputBox';
import { StyledCaption } from 'components/Caption';
import { showCodeCaption } from 'utils/CaptionStyles';

const SecurityCodeInput = () => {
  const [code, setCode] = useState({
    code: '',
  });

  const { handleInput: handleCardNumber, handleRef: handleInputRef } =
    useInputHandler(setCode, {
      length: LENGTH.SECURITY_CODE,
      regex: REGEX.ONLY_NUMBER,
    });

  return (
    <>
      <label className="label-text" htmlFor="code">
        보안 코드&#40;CVC/CVV&#41;
      </label>
      <CodeInputBox>
        <CodeInput
          type="password"
          name="code"
          id="code"
          maxLength={LENGTH.SECURITY_CODE}
          inputMode="numeric"
          value={code.code}
          ref={(el) => handleInputRef(el, 0)}
          onChange={handleCardNumber}
          placeholder="000"
          required
        />
        <QuestionMark>?</QuestionMark>
      </CodeInputBox>
      <SecurityCodeCaption codeLength={code.code.length}>
        보안 코드 3자리를 모두 입력해 주세요.
      </SecurityCodeCaption>
    </>
  );
};

const CodeInput = styled(StyledInput)`
  display: d;
  width: 24vw;
  height: 48px;
  padding: 0 4vw;
  margin: 0;
  border-radius: 8px;
`;

const CodeInputBox = styled(StyledInputBox)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  margin-top: 12px;
  background: none;
  border-radius: 8px;
`;

const QuestionMark = styled.p`
  font-family: 'Avenir', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  margin-left: 12px;
  line-height: 1.5;
  color: var(--gray-color-300);
  border: 1.4px solid var(--gray-color-200);
  border-radius: 50%;
  cursor: pointer;

  &:hover::after {
    content: '카드 뒷면 서명란에 적힌 끝 번호 3자리를 입력해 주세요.';
    display: block;
    position: absolute;
    left: 45vw;
    width: 44vw;
    padding: 6px 6px 5px;
    font-size: 10px;
    word-break: keep-all;
    text-align: center;
    border: 1.4px solid var(--gray-color-200);
    border-radius: 8px;
    background: #fff;
  }

  &:hover::before {
    content: '';
    display: block;
    position: absolute;
    left: 42vw;
    width: 4vw;
    border: 0.7px solid var(--gray-color-200);
  }
`;

const SecurityCodeCaption = styled(StyledCaption)<{ codeLength: number }>`
  visibility: ${({ codeLength }) => showCodeCaption(codeLength)};
`;

export default SecurityCodeInput;
