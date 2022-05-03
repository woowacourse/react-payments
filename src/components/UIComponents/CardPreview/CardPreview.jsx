import React from "react";
import styled from "styled-components";
import PropTypes, { string } from "prop-types";
import { CREATE_MASKED_CHARACTERS } from "../../../constants/constants";

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

  background: ${(props) => (props.isComplete ? "#00caa5" : "#d2d2d2")};
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

const CardNumber = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  margin-bottom: 12px;
  gap: 10px;
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

export default function CardPreview({
  cardNumber,
  holderName,
  expireDate,
  canProceed,
}) {
  return (
    <CardContainer>
      <SmallCard isComplete={canProceed}>
        <CardName>Woowa Card</CardName>
        <CardChip />
        <CardNumber>
          <p>{cardNumber[0]}</p>
          <p>{cardNumber[1]}</p>
          <p>{CREATE_MASKED_CHARACTERS(cardNumber[2].length)}</p>
          <p>{CREATE_MASKED_CHARACTERS(cardNumber[3].length)}</p>
        </CardNumber>
        <CardBottomSection>
          <CardHolderName>{holderName}</CardHolderName>
          <p>
            {expireDate[0]} {expireDate[0].length !== 0 && "/"} {expireDate[1]}
          </p>
        </CardBottomSection>
      </SmallCard>
    </CardContainer>
  );
}

CardPreview.propTypes = {
  cardNumber: PropTypes.arrayOf(string),
  holderName: PropTypes.string,
  expireDate: PropTypes.arrayOf(string),
  canProceed: PropTypes.bool,
};
