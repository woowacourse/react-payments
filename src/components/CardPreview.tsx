import React from "react";
import styled from "styled-components";
import Visa from "../static/Visa.png";

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

const CardInfoNumbers = styled.div`
  display: flex;
  gap: 10px;
`;

const PreviewText = styled.span`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: left;
`;

interface Props {
  cardInformation: TCardInformation;
}

export default function CardPreview({ cardInformation }: Props) {
  return (
    <CardContainer>
      <CardHeader>
        <div></div>
        <img src={Visa}></img>
      </CardHeader>
      <CardInfoContainer>
        <CardInfoNumbers>
          <PreviewText>{cardInformation.cardNumber1}</PreviewText>
          <PreviewText>{cardInformation.cardNumber2}</PreviewText>
          <PreviewText>{cardInformation.cardNumber3}</PreviewText>
          <PreviewText>{cardInformation.cardNumber4}</PreviewText>
        </CardInfoNumbers>
        <div className="card-info-expiration-date">
          <PreviewText>{cardInformation.cardExpirationMonth}</PreviewText>
          {cardInformation.cardExpirationMonth.length === 2 && "/"}
          <PreviewText>{cardInformation.cardExpirationYear}</PreviewText>
        </div>
        <div className="card-info-owner-name">
          <PreviewText>{cardInformation.cardOwnerName}</PreviewText>
        </div>
      </CardInfoContainer>
    </CardContainer>
  );
}
