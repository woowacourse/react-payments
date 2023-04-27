import styled from "styled-components";
import { NextButton } from "components/ButtonStyle";
import CardPreview from "components/CardPreview";
import Input, { CardNickname } from "components/Input";
import { CardInfo } from "types";

interface Props {
  cardInfo: CardInfo;
}

const LastPage = ({ cardInfo }: Props) => {
  return (
    <>
      <S.CompletionMessage>카드 등록이 완료되었습니다.</S.CompletionMessage>
      <S.Wrapper>
        <CardPreview cardInfo={cardInfo}></CardPreview>
        <Input inputStyle={CardNickname}></Input>
        <NextButton>확인</NextButton>
      </S.Wrapper>
    </>
  );
};

const S = {
  Wrapper: styled.div`
    margin-top: 194px;
  `,

  CompletionMessage: styled.p`
    position: fixed;
    top: 130px;
    font-size: 24px;
    text-align: center;
  `,
};

export default LastPage;
