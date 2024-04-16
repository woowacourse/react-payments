import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 212px;
  height: 132px;
  background: rgba(51, 51, 51, 1);
  border-radius: 4px;
  color: rgba(255, 255, 255, 1);
`;

interface Props {
  cardInformation: TCardInformation;
}

export default function CardPreview({ cardInformation }: Props) {
  console.log(cardInformation);
  return (
    <CardContainer>
      <div>
        <div className="card-IC"></div>
        <img className="card-brand-img"></img>
      </div>
      <div className="card-info-container">
        <div className="card-info-numbers">
          <span>{cardInformation.cardNumber1}</span>
          <span>{cardInformation.cardNumber2}</span>
          <span>{cardInformation.cardNumber3}</span>
          <span>{cardInformation.cardNumber4}</span>
        </div>
        <div className="card-info-expiration-date">
          <span>{cardInformation.cardExpirationMonth}</span>
          <span>{cardInformation.cardExpirationYear}</span>
        </div>
        <div className="card-info-owner-name">
          {cardInformation.cardOwnerName}
        </div>
      </div>
    </CardContainer>
  );
}
