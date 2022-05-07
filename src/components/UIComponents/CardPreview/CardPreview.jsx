import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CREATE_MASKED_CHARACTERS } from "../../../constants/constants";

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 25px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 14px 16px;

  background: ${(props) => (props.isComplete ? "#00caa5" : "#d2d2d2")};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  font-size: ${(props) => props.fontSize};
  line-height: 12px;
  vertical-align: middle;
  font-weight: 400;
`;

const CardName = styled.p`
  margin: ${(props) => props.cardNameMargin};
`;

const CardChip = styled.div`
  width: ${(props) => props.cardChipWidth};
  height: ${(props) => props.cardChipHeight};

  background: #cbba64;
  border-radius: 4px;

  margin-bottom: ${(props) => props.cardChipMarginBottom};
`;

const CardNumber = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  gap: 10px;

  margin-bottom: ${(props) => props.cardNumberMarginBottom};
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
  width,
  height,
  fontSize,
  cardChipWidth,
  cardChipHeight,
  cardNameMargin,
  cardChipMarginBottom,
  cardNumberMarginBottom,
}) {
  const {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
  } = cardNumber;

  const { month, year } = expireDate;

  return (
    <CardContainer>
      <Card
        isComplete={canProceed}
        width={width}
        height={height}
        fontSize={fontSize}
      >
        <CardName cardNameMargin={cardNameMargin}>Woowa Card</CardName>
        <CardChip
          cardChipWidth={cardChipWidth}
          cardChipHeight={cardChipHeight}
          cardChipMarginBottom={cardChipMarginBottom}
        />
        <CardNumber cardNumberMarginBottom={cardNumberMarginBottom}>
          <p>{firstCardNumber.value}</p>
          <p>{secondCardNumber.value}</p>
          <p>{CREATE_MASKED_CHARACTERS(thirdCardNumber.value.length)}</p>
          <p>{CREATE_MASKED_CHARACTERS(fourthCardNumber.value.length)}</p>
        </CardNumber>
        <CardBottomSection>
          <CardHolderName>{holderName.value}</CardHolderName>
          <p>
            {month.value} {month.value.length !== 0 && "/"} {year.value}
          </p>
        </CardBottomSection>
      </Card>
    </CardContainer>
  );
}

CardPreview.propTypes = {
  cardNumber: PropTypes.object,
  holderName: PropTypes.object,
  expireDate: PropTypes.object,
  canProceed: PropTypes.bool,
};

CardPreview.defaultProps = {
  width: "213px",
  height: "133px",
  fontSize: "10px",
  cardChipWidth: "40px",
  cardChipHeight: "26px",
  cardNameMargin: "0 0 20px 0",
  cardChipMarginBottom: "15px",
  cardNumberMarginBottom: "12px",
};
