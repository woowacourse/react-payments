import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { changeToValidValue } from "utils/inputValidator";

const NameInput = () => {
  const [name, setName] = useState("");

  const handleName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toUpperCase().trimStart();
    if (value.includes("  ")) return;

    setName(
      changeToValidValue(value, {
        length: 30,
        regex: /[^a-z A-Z]/g,
      })
    );
  };

  return (
    <>
      <S.Wrapper>
        <S.Label htmlFor="name">카드 소유자 이름&#40;선택&#41;</S.Label>
        <p>{name.length}/30</p>
      </S.Wrapper>
      <S.Input
        type="text"
        name="name"
        id="name"
        maxLength={30}
        value={name}
        onChange={handleName}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
      <S.Caption>영문 이름을 30자 이하로 입력해 주세요.</S.Caption>
    </>
  );
};

const S = {
  Label: styled.label`
    color: var(--label-color);
  `,

  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    & p {
      color: var(--label-color);
    }
  `,

  Input: styled.input`
    display: block;
    width: 88vw;
    height: 48px;
    margin-top: 14px;
    padding: 0 28px;
    background: var(--input-background);
    border-radius: 8px;
  `,

  Caption: styled.p`
    color: var(--gray-color-400);
    font-size: 12px;
    margin: 10px 0 20px 4px;
  `,
};

export default NameInput;
