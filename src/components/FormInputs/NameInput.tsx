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
        <label className="label-text" htmlFor="name">
          카드 소유자 이름&#40;선택&#41;
        </label>
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
    </>
  );
};

const S = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;

    & p {
      color: var(--label-color);
      font-size: 12px;
    }
  `,

  Input: styled.input`
    display: block;
    width: 88vw;
    height: 48px;
    margin: 10px 0 36px;
    padding: 0 8vw;
    font-size: 14px;
    background: var(--input-background);
    border-radius: 8px;
  `,
};

export default NameInput;
