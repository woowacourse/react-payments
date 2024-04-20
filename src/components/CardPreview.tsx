import { useEffect, useState } from "react";

import Mastercard from "../static/Mastercard.png";
import Visa from "../static/Visa.png";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 212px;
  height: 132px;
  background: rgba(51, 51, 51, 1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
`;

const CardHeader = styled.div`
  padding: 8px 12px 0;
  display: flex;
  justify-content: space-between;

  & > div {
    width: 36px;
    height: 22px;
    background: rgba(221, 205, 120, 1);
    border: 0.5px solid rgba(221, 205, 120, 0.1);
    border-radius: 4px;
  }

  & > img {
    width: 36px;
    height: 22px;
  }
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 25px 12px 17px;
  gap: 8px;
`;

const CardPreviewTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 20px;
  gap: 10px;
`;

const PreviewText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;
  min-width: 38px;
`;

const HiddenNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const HiddenNumber = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 1);
`;

interface CardPreviewProps {
  cardInformation: CardInformation;
}

export default function CardPreview({ cardInformation }: CardPreviewProps) {
  const [cardBrandImg, setCardBrandImg] = useState("");

  useEffect(() => {
    if (cardInformation.cardNumbers[0][0] === "4") {
      setCardBrandImg(Visa);
      return;
    }

    if (
      Number(cardInformation.cardNumbers[0].slice(0, 2)) >= 51 &&
      Number(cardInformation.cardNumbers[0].slice(0, 2)) <= 55
    ) {
      setCardBrandImg(Mastercard);
      return;
    }

    setCardBrandImg("");
  }, [cardInformation.cardNumbers]);

  return (
    <CardContainer>
      <CardHeader>
        <div></div>
        {cardBrandImg && <img src={cardBrandImg}></img>}
      </CardHeader>
      <CardInfoContainer>
        <CardPreviewTextContainer>
          <PreviewText>{cardInformation.cardNumbers[0]}</PreviewText>
          <PreviewText>{cardInformation.cardNumbers[1]}</PreviewText>
          <HiddenNumberContainer>
            {Array.from({ length: cardInformation.cardNumbers[2].length }).map(
              (_, index) => (
                <HiddenNumber key={index} />
              )
            )}
          </HiddenNumberContainer>
          <HiddenNumberContainer>
            {Array.from({ length: cardInformation.cardNumbers[3].length }).map(
              (_, index) => (
                <HiddenNumber key={index} />
              )
            )}
          </HiddenNumberContainer>
        </CardPreviewTextContainer>
        <CardPreviewTextContainer>
          <div>
            <PreviewText>{cardInformation.cardExpiration.month}</PreviewText>
            {cardInformation.cardExpiration.month.length === 2 && "/"}
            <PreviewText>{cardInformation.cardExpiration.year}</PreviewText>
          </div>
        </CardPreviewTextContainer>
        <CardPreviewTextContainer>
          <PreviewText>{cardInformation.cardOwnerName}</PreviewText>
        </CardPreviewTextContainer>
      </CardInfoContainer>
    </CardContainer>
  );
}
