import { ChangeEvent, KeyboardEventHandler, useState } from "react";
import styled, { css } from "styled-components";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import { NextButton } from "components/style/ButtonStyle";
import CardPreview from "components/CardPreview";
import Input, { CardNickname } from "components/Input";
import LengthLimit from "components/LengthLimit";
import GotLost from "pages/GotLost";
import useSetCardInfo from "hooks/useSetCardInfo";
import useInitCardInfo from "hooks/useInitCardInfo";
import { LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
const { NOT_ONLY_BLANK } = VALID_INPUT;

const LastPage = () => {
  const cardInfo = useInitCardInfo().cardInfo;

  const [nickname, setNickname] = useState("");

  const handleNicknameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const validNickname = target.value.slice(0, LIMIT_LENGTH.NAME);

    setNickname(
      changeInvalidValueToBlank(validNickname, {
        length: LIMIT_LENGTH.NAME,
        regex: NOT_ONLY_BLANK,
      })
    );
  };

  const { handleSave, isCompleted } = useSetCardInfo(nickname, "card");
  const handleEnterKeyDown: KeyboardEventHandler<HTMLInputElement> = ({
    key,
  }) => {
    if (key === "Enter") handleSave();
  };

  return (
    <>
      {cardInfo.cardCompany !== "" ? (
        <S.Wrapper>
          {isCompleted && (
            <S.CompletionMessage>카드 등록 완료!</S.CompletionMessage>
          )}
          <CardPreview cardInfo={cardInfo} />
          <Input
            autoFocus
            value={nickname}
            inputStyle={CardNickname}
            onChange={handleNicknameChange}
            onKeyDown={handleEnterKeyDown}
          />
          <LengthLimit
            length={nickname.length}
            lengthLimitStyle={nicknameLimitStyle}
          />
          <NextButton onClick={handleSave}>확인</NextButton>
        </S.Wrapper>
      ) : (
        <GotLost />
      )}
    </>
  );
};

const S = {
  Wrapper: styled.div`
    margin-top: 144px;
  `,

  CompletionMessage: styled.p`
    position: fixed;
    top: 110px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    text-align: center;
  `,
};

const nicknameLimitStyle = css`
  font-size: 12px;
  text-align: right;
  margin: 4px 0 142px;
`;

export default LastPage;
