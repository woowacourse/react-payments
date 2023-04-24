import { ChangeEvent, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { changeToValidValue } from "utils/inputValidator";
import { LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
import Input from "components/Input";
const { ONLY_ENGLISH, INVALID_BLANK } = VALID_INPUT;

interface Props {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
}

const NameInput = ({ name, setName }: Props) => {
  const handleName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toUpperCase().trimStart();
    if (value.includes(INVALID_BLANK)) return;

    setName(
      changeToValidValue(value, {
        length: LIMIT_LENGTH.NAME,
        regex: ONLY_ENGLISH,
      })
    );
  };

  return (
    <>
      <S.Wrapper>
        <label className="label-text" htmlFor="name">
          카드 소유자 이름&#40;선택&#41;
        </label>
        <p>
          {name.length}/{LIMIT_LENGTH.NAME}
        </p>
      </S.Wrapper>
      <Input
        display="block"
        width="88vw"
        margin="10px 0 36px"
        padding="0 8vw"
        borderRadius="8px"
        type="text"
        name="name"
        id="name"
        maxLength={LIMIT_LENGTH.NAME}
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
};

export default NameInput;
