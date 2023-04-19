import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { changeToValidValue } from "utils/inputValidator";
import { HIDDEN_ELEMENT_STYLE } from "constants/style";

const SecurityCodeInput = () => {
  const [code, setCode] = useState("");

  const handleCardNumber = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCode(
      changeToValidValue(target.value, {
        length: 3,
        regex: /[^\d]/g,
      })
    );
  };

  return (
    <>
      <S.Label htmlFor="code">보안 코드&#40;CVC/CVV&#41;</S.Label>
      <S.Wrapper>
        <S.Input
          type="password"
          name="code"
          id="code"
          maxLength={3}
          inputMode="numeric"
          value={code}
          onChange={handleCardNumber}
          placeholder="000"
          required
        />
        <S.QuestionMark>?</S.QuestionMark>
      </S.Wrapper>
      <S.Caption codeLength={code.length}>
        보안 코드 3자리를 모두 입력해 주세요.
      </S.Caption>
    </>
  );
};

const S = {
  Label: styled.label`
    color: var(--label-color);
  `,

  Wrapper: styled.div`
    display: flex;
    align-items: center;
    margin-top: 14px;
  `,

  Input: styled.input`
    display: block;
    width: 24vw;
    height: 48px;
    padding: 0 28px;
    background: var(--input-background);
    border-radius: 8px;
    text-align: center;
  `,

  QuestionMark: styled.p`
    font-family: "Avenir", sans-serif;

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

    &:hover::after {
      content: "카드 뒷면 서명란에 적힌 끝 번호 3자리를 입력해 주세요.";
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
      content: "";
      display: block;
      position: absolute;
      left: 42vw;
      width: 4vw;
      border: 0.7px solid var(--gray-color-200);
    }
  `,

  Caption: styled.p<{ codeLength: number }>`
    color: var(--caption-color);
    font-size: 12px;
    margin: 10px 0 20px 4px;
    visibility: ${({ codeLength }) =>
      codeLength === 3 && `${HIDDEN_ELEMENT_STYLE}`};
  `,
};

export default SecurityCodeInput;
