import { MouseEvent } from "react";
import styled from "styled-components";
import { CARD_COMPANYS } from "../../constant";
import { CardInfo } from "../../types";
import AddCardButton from "../Button/AddCardButton";
import Card from "../Card";
import { useResetCardContext } from "../../hooks/useResetCardContext";

interface HomePageProps {
  cardList: CardInfo[];
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 36px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: #383838;
`;

const AddInformation = styled.h4`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: #575757;
  opacity: 0.9;
  margin-top: 33px;
  margin-bottom: 9px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 46px;
  gap: 46px;
`;

export default function Homepage({ onClick, cardList }: HomePageProps) {
  useResetCardContext();

  return (
    <Page>
      <Title>보유카드</Title>
      {cardList.length === 0 && (
        <AddInformation>새로운 카드를 등록해주세요.</AddInformation>
      )}
      <CardWrapper>
        {cardList.map((card: CardInfo) => (
          <Card
            type="homepage"
            cardColor={CARD_COMPANYS[card.cardTitle].backgroundColor}
            cardTitle={CARD_COMPANYS[card.cardTitle].title}
            key={`${card.cardNumber.fourth}${card.cardNumber.third}${card.cardNumber.fourth}`}
            owner={card.owner}
            cardNumberSet={Object.values(card.cardNumber)}
            expiracy={`${card.expiracy.month}/${card.expiracy.year}`}
          />
        ))}
        <AddCardButton onClick={onClick} />
      </CardWrapper>
    </Page>
  );
}
