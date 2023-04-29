import { ChangeEvent, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { NextButton } from "components/ButtonStyle";
import CardPreview from "components/CardPreview";
import Input, { CardNickname } from "components/Input";
import LengthLimit from "components/LengthLimit";
import GotLost from "pages/GotLost";
import { LIMIT_LENGTH } from "constants/limit";
import { CardInfoContext } from "components/CardInfoProvider";

const LastPage = () => {
  const cardInfo = useContext(CardInfoContext).cardInfo;
  const [nickname, setNickname] = useState("");

  const handleNicknameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const validNickname = target.value.slice(0, LIMIT_LENGTH.NAME);

    setNickname(validNickname);
  };

  return (
    <>
      {cardInfo.cardCompany !== "" ? (
        <S.Wrapper>
          <CardPreview cardInfo={cardInfo}></CardPreview>
          <Input
            value={nickname}
            inputStyle={CardNickname}
            onChange={handleNicknameChange}
          ></Input>
          <LengthLimit
            length={nickname.length}
            lengthLimitStyle={nicknameLimitStyle}
          />
          <NextButton>확인</NextButton>
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
    font-size: 24px;
    text-align: center;
  `,
};

const nicknameLimitStyle = css`
  font-size: 12px;
  text-align: right;
  margin: 4px 0 122px;
`;

export default LastPage;
