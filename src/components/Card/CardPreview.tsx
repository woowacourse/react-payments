import styled from "styled-components";
import CardNumbers from "./CardNumbers";
import CardLogo from "./CardLogo";
import ExpirationDate from "./ExpirationDate";
import UserName from "./UserName";
import { CARD_COMPANY } from "../../constants/card";
import { useEffect, useState } from "react";
import { CardCompany } from "../../types/card";

const BaseCard = styled.div`
  color: white;
  padding: 10px 12px;
  width: 202px;
  height: 117px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const Styled = {
  CardFrontLayout: styled(BaseCard)<{ backgroundColor: string }>`
    background: ${(props) => props.backgroundColor};
    display: grid;
    gap: 10px;
  `,

  CardBackLayout: styled(BaseCard)`
    background: #d5d5d5;
    position: relative;
  `,

  CardCVCLine: styled.div`
    background: #cbba64;
    width: 100%;
    height: 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: 90px;
    left: 0;

    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.08em;
    text-align: right;
  `,

  CVCNumber: styled.div`
    padding-right: 15px;
  `,

  ICChip: styled.div`
    background: #ddcd78;
    width: 36px;
    height: 22px;
    border-radius: 5px;
  `,
};

interface CardFrontProps {
  backgroundColor: string;
  cardNumbers: string[];
  expirationDate: string[];
  userName: string[];
}

interface CardPreviewProps {
  cardNumbers: string[];
  expirationDate: string[];
  userName: string[];
  cardCompany: CardCompany | null;
  cardCVC: string[];
  cardPassword: string[];
  focusedField: string;
}

const CardFront = ({ backgroundColor, cardNumbers, expirationDate, userName }: CardFrontProps) => (
  <Styled.CardFrontLayout backgroundColor={backgroundColor}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Styled.ICChip />
      <CardLogo cardNumbers={cardNumbers} />
    </div>
    <div style={{ display: "grid", gap: "8px", paddingLeft: "5px" }}>
      <CardNumbers cardNumbers={cardNumbers} />
      <ExpirationDate expirationDate={expirationDate} />
      <UserName userName={userName} />
    </div>
  </Styled.CardFrontLayout>
);

const CardBack = ({ cardCVC }: { cardCVC: string[] }) => (
  <Styled.CardBackLayout>
    <Styled.CardCVCLine>
      <Styled.CVCNumber>{cardCVC[0]}</Styled.CVCNumber>
    </Styled.CardCVCLine>
  </Styled.CardBackLayout>
);

const CardPreview = ({
  cardNumbers,
  expirationDate,
  userName,
  cardCompany,
  cardCVC,
  focusedField,
}: CardPreviewProps) => {
  const [backgroundColor, setBackgroundColor] = useState("#333333");
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // if (cardCompany[0]) setBackgroundColor(CARD_COMPANY[cardCompany[0]]);
    if (cardCompany) setBackgroundColor(CARD_COMPANY[cardCompany]);
  }, [cardCompany]);

  useEffect(() => {
    if (focusedField === "cardCVC") setIsFlipped(true);
    if (focusedField === "cardPassword") setIsFlipped(false);
  }, [focusedField]);

  return (
    <>
      {isFlipped ? (
        <CardBack cardCVC={cardCVC} />
      ) : (
        <CardFront
          backgroundColor={backgroundColor}
          cardNumbers={cardNumbers}
          expirationDate={expirationDate}
          userName={userName}
        />
      )}
    </>
  );
};

export default CardPreview;
