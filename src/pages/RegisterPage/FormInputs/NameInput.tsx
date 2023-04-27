import { ChangeEvent, useContext } from "react";
import styled, { css } from "styled-components";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Input, { NameInputStyle } from "components/Input";
import LengthLimit from "components/LengthLimit";
import { CardInfoContext } from "App";
import { LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
const { ONLY_ENGLISH, INVALID_BLANK } = VALID_INPUT;

const NameInput = () => {
  const { name } = useContext(CardInfoContext).cardInfo;
  const setName = useContext(CardInfoContext).setCardInfo;

  const handleNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const value = target.value.toUpperCase().trimStart();
    if (value.includes(INVALID_BLANK)) return;

    setName((prevState) => {
      return {
        ...prevState,
        name: changeInvalidValueToBlank(value, {
          length: LIMIT_LENGTH.NAME,
          regex: ONLY_ENGLISH,
        }),
      };
    });
  };

  return (
    <>
      <S.Wrapper>
        <label className="label-text" htmlFor="name">
          카드 소유자 이름&#40;선택&#41;
        </label>
        <LengthLimit
          length={name.length}
          lengthLimitStyle={nicknameLimitStyle}
        />
      </S.Wrapper>
      <Input
        type="text"
        name="name"
        id="name"
        maxLength={LIMIT_LENGTH.NAME}
        value={name}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        inputStyle={NameInputStyle}
        onChange={handleNameChange}
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

const nicknameLimitStyle = css`
  font-size: 12px;
`;

export default NameInput;
