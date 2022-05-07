import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes, { string } from "prop-types";
import { CREATE_MASKED_CHARACTERS } from "../../../utils/constants";
import CardInfoContext from "../../../context/CardInfoContext";

const cardSizeBeforeSubmit = {
  width: "213px",
  height: "133px",
  padding: "14px 16px",
  fontSize: "10px",
  lineHeight: "12px",
  justifyContent: "flex-start",
};

const cardSizeAfterSubmit = {
  width: "295px",
  height: "180px",
  padding: "20px 25px",
  fontSize: "16px",
  lineHeight: "20px",
  justifyContent: "space-around",
};

const cardColors = {
  default: "#d2d2d2",
  complete: "#00caa5",
  0: "#383838",
  1: "#066163",
  2: "#CDBE78",
  3: "#F2F2F2",
  4: "#FFEF82",
};

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const cardSize = (isSubmitted) =>
  isSubmitted ? cardSizeAfterSubmit : cardSizeBeforeSubmit;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isSubmitted }) => cardSize(isSubmitted).justifyContent};

  width: ${({ isSubmitted }) => cardSize(isSubmitted).width};
  height: ${({ isSubmitted }) => cardSize(isSubmitted).height};
  padding: ${({ isSubmitted }) => cardSize(isSubmitted).padding};

  background-color: ${({ colorType }) => cardColors[colorType]};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  color: ${({ colorType }) =>
    (colorType === 0 || colorType === 1) && "#ffffff"};

  font-size: ${({ isSubmitted }) => cardSize(isSubmitted).fontSize};
  line-height: ${({ isSubmitted }) => cardSize(isSubmitted).lineHeight};
  vertical-align: middle;
  font-weight: 400;
`;

const CardName = React.memo(styled.p`
  margin-bottom: 20px;
`);

const CardChip = React.memo(styled.div`
  width: 40px;
  height: 26px;

  background: #cbba64;
  border-radius: 4px;

  margin-bottom: 15px;
`);

const CardNumber = React.memo(styled.p`
  display: flex;
  align-items: center;
  height: 10px;
  margin-bottom: 12px;
`);

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

export default function CardPreview({
  cardInfo,
  isValidCardInfo,
  isSubmitted,
  color,
}) {
  const { state } = useContext(CardInfoContext);
  const { cardNumber, holderName, expireDate } =
    Object.keys(state).length === 0 ? cardInfo : state;

  return (
    <CardContainer>
      <SmallCard
        isComplete={isValidCardInfo}
        isSubmitted={isSubmitted}
        colorType={color || (isValidCardInfo ? "complete" : "default")}
      >
        <CardName>Woowa Card</CardName>
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
  cardInfo: PropTypes.shape({
    cardInfo: PropTypes.shape({
      cardNumber: PropTypes.arrayOf(string),
      holderName: PropTypes.string,
      expireDate: PropTypes.arrayOf(string),
    }),
  }),
  isValidCardInfo: PropTypes.bool,
  isSubmitted: PropTypes.bool,
  color: PropTypes.oneOf([0, 1, 2, 3, 4, "default", "complete"]),
};

CardPreview.defaultProp = {
  color: "default",
};
