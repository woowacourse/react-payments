import React from "react";
import styled from "styled-components";
import PropTypes, { string } from "prop-types";
import { CREATE_MASKED_CHARACTERS } from "../constants";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;

  width: 213px;
  min-height: 133px;
  padding: 14px 16px;

  background: #94dacd;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  font-size: 10px;
  line-height: 12px;
  vertical-align: middle;
  font-weight: 400;
`;

const CardName = styled.p`
  margin-bottom: 20px;
`;

const CardChip = styled.div`
  width: 40px;
  height: 26px;

  background: #cbba64;
  border-radius: 4px;

  margin-bottom: 15px;
`;

const CardNumber = styled.p`
  display: flex;
  align-items: center;
  height: 10px;
  margin-bottom: 12px;
`;

const CardBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10px;
`;

const CardHolderName = styled.p`
  width: 55%;
  word-wrap: break-word;
`;

const CardExpireDate = styled.p``;

export default function CardPreview({ cardNumber, holderName, expireDate }) {
  return (
    <CardContainer>
      <SmallCard>
        <CardName>클린카드</CardName>
        <CardChip />
        <CardNumber>
          {cardNumber[0]}&nbsp;&nbsp;&nbsp;{cardNumber[1]}&nbsp;&nbsp;&nbsp;
          {CREATE_MASKED_CHARACTERS(cardNumber[2].length)}&nbsp;&nbsp;&nbsp;
          {CREATE_MASKED_CHARACTERS(cardNumber[3].length)}
        </CardNumber>
        <CardBottomSection>
          <CardHolderName>{holderName}</CardHolderName>
          <CardExpireDate>
            {expireDate[0]} {expireDate[0].length !== 0 && "/"} {expireDate[1]}
          </CardExpireDate>
        </CardBottomSection>
      </SmallCard>
    </CardContainer>
  );
}

CardPreview.propTypes = {
  cardNumber: PropTypes.arrayOf(string),
  holderName: PropTypes.string,
  expireDate: PropTypes.arrayOf(string),
};
