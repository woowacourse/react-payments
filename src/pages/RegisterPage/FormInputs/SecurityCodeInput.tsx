import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Input, { SecurityCodeInputStyle } from "components/Input";
import { CodeCaption } from "components/CaptionStyle";
import { LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
const { ONLY_NUMBER } = VALID_INPUT;

interface Props {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
}

const SecurityCodeInput = ({ code, setCode }: Props) => {
  const handleCodeChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCode(
      changeInvalidValueToBlank(target.value, {
        length: LIMIT_LENGTH.SECURITY_CODE,
        regex: ONLY_NUMBER,
      })
    );
  };

  return (
    <>
      <label className="label-text" htmlFor="code">
        보안 코드&#40;CVC/CVV&#41;
      </label>
      <S.Wrapper>
        <Input
          type="password"
          name="code"
          id="code"
          maxLength={LIMIT_LENGTH.SECURITY_CODE}
          inputMode="numeric"
          value={code}
          placeholder="000"
          required
          inputStyle={SecurityCodeInputStyle}
          onChange={handleCodeChange}
        />
        <S.QuestionMark>?</S.QuestionMark>
      </S.Wrapper>
      <CodeCaption codeLength={code.length}>
        보안 코드 {LIMIT_LENGTH.SECURITY_CODE}자리를 모두 입력해 주세요.
      </CodeCaption>
    </>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
  `,

  QuestionMark: styled.p`
    font-family: "Avenir", sans-serif;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 28px;
    height: 28px;
    margin-left: 12px;
    line-height: 1.5;
    color: var(--gray-color-300);
    border: 1.4px solid var(--gray-color-200);
    border-radius: 50%;
    cursor: pointer;

    &:hover::after {
      content: "카드 뒷면 서명란에 적힌 끝 번호 3자리를 입력해 주세요.";
      display: block;
      position: absolute;
      right: -678%;
      width: 560%;
      max-width: 280px;
      padding: 6px 6px 5px;
      font-size: 10px;
      word-break: keep-all;
      text-align: center;
      border: 1.4px solid var(--gray-color-200);
      border-radius: 8px;
      background: #fff;
    }

    &:hover::before {
      content: "";
      display: block;
      position: absolute;
      right: -26px;
      width: 20px;
      border: 0.7px solid var(--gray-color-200);
    }
  `,
};

export default SecurityCodeInput;
