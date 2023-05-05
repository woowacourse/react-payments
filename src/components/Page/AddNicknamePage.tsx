import styled from "styled-components";
import Card from "../Card";
import { useCardState } from "../../context/CardContext";
import { useInput } from "../../hooks/useInput";
import Input from "../common/Input";
import ConfirmButton from "../Button/ConfirmButton";
import { DownRightButtonWrapper } from "./AddCardPage.styles";
import { CardInfo } from "../../types";
import { SetStateAction } from "react";

interface addNicknamePageProps {
  cardList: CardInfo[];
  setCardList: (callback: SetStateAction<CardInfo[]>) => void;
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  color: #383838;
  line-height: 28px;
  font-size: 16px;
  font-weight: 400;
  font-size: 24px;
  color: rgb(56, 56, 56);
  margin-top: 130px;
`;

const InputWrapper = styled.div`
  margin-top: 123px;
  width: 244px;
`;

export default function AddNicknamePage({
  setCardList,
  setPageIndex,
}: addNicknamePageProps) {
  const { color, title, cardNumber, expiration, owner } = useCardState();
  const nickName = useInput(title, { name: "nickName" });

  if (!cardNumber) return <div>에러가 발생했습니다</div>;
  if (!expiration) return <div>에러가 발생했습니다</div>;

  const { first, second, third, fourth } = cardNumber;
  const { month, year } = expiration;

  const onClick = () => {
    const newCard = {
      cardTitle: title,
      cardNumber: {
        first: first,
        second: second,
        third: third,
        fourth: fourth,
      },
      expiration: {
        month: month,
        year: year,
      },
      owner: owner ? owner : "",
      nickName: nickName.value,
    };

    setCardList((prev) => [...prev, newCard]);
    setPageIndex(0);
  };

  return (
    <Page>
      <Title>카드등록이 완료되었습니다.</Title>
      <Card
        type="addCard"
        cardColor={color}
        cardTitle={title}
        cardNumberSet={[first, second, third, fourth]}
        expiration={`${month}/${year}`}
        owner={owner === undefined ? "" : owner.toUpperCase()}
      />
      <InputWrapper>
        <Input autoFocus shape="underline" textAlign="center" {...nickName} />
      </InputWrapper>
      <DownRightButtonWrapper>
        <ConfirmButton onClick={onClick} />
      </DownRightButtonWrapper>
    </Page>
  );
}
