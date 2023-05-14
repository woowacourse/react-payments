import { ChangeEvent, KeyboardEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { changeInvalidValueToBlank } from "utils/inputValidator";
import Button, { NextButton } from "components/Button";
import CardPreview from "components/CardPreview";
import Input, { CardNickname } from "components/Input";
import TextLimit from "components/TextLimit";
import GotLost from "pages/GotLost";
import useInitCardInfo from "hooks/useInitCardInfo";
import { LOADING_PAGE } from "constants/path";
import { LIMIT_LENGTH, VALID_INPUT } from "constants/limit";
const { NOT_ONLY_BLANK } = VALID_INPUT;

const LastPage = () => {
  const { cardInfo, initCardInfo } = useInitCardInfo();
  const navigate = useNavigate();

  const handleNicknameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const validNickname = target.value.slice(0, LIMIT_LENGTH.NAME);

    initCardInfo(
      "nickname",
      changeInvalidValueToBlank(validNickname, {
        length: LIMIT_LENGTH.NAME,
        regex: NOT_ONLY_BLANK,
      })
    );
  };

  const handleButtonClick = () => {
    if (cardInfo.nickname === "") return alert("카드 별칭을 입력해 주세요.");

    navigate(LOADING_PAGE);
  };

  const handleEnterKeyDown: KeyboardEventHandler<HTMLInputElement> = ({
    key,
  }) => {
    if (key === "Enter") handleButtonClick();
  };

  return (
    <>
      {cardInfo.cardCompany !== "" ? (
        <S.Wrapper>
          <CardPreview cardInfo={cardInfo} />
          <Input
            placeholder="카드 별칭을 입력해 주세요."
            autoFocus
            value={cardInfo.nickname}
            inputStyle={CardNickname}
            onChange={handleNicknameChange}
            onKeyDown={handleEnterKeyDown}
          />
          <TextLimit
            length={cardInfo.nickname.length}
            textLimitStyle={nicknameLimitStyle}
          />
          <Button
            children="확인"
            name="확인 버튼"
            ButtonStyle={NextButton}
            onClick={handleButtonClick}
          />
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
};

const nicknameLimitStyle = css`
  font-size: 12px;
  text-align: right;
  margin: 4px 0 142px;
`;

export default LastPage;
