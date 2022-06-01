import styled from "styled-components";
import { CREATE_MASKED_CHARACTERS } from "../../../constants/constants";
import type {
  ICardCss,
  ICardNumberState,
  IExpireDateState,
} from "../../../types/cardInfoState";

const StyledCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${(props: { cardContainerMarginBottom: string }) =>
    props.cardContainerMarginBottom};
`;

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props: {
    width: string;
    height: string;
    fontSize: string;
    isComplete: boolean;
  }) => props.width};
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

const StyledCardName = styled.p`
  margin: ${(props: { cardNameMargin: string }) => props.cardNameMargin};
`;

const StyledCardChip = styled.div`
  width: ${(props: {
    cardChipWidth: string;
    cardChipHeight: string;
    cardChipMarginBottom: string;
  }) => props.cardChipWidth};
  height: ${(props) => props.cardChipHeight};

  background: #cbba64;
  border-radius: 4px;

  margin-bottom: ${(props) => props.cardChipMarginBottom};
`;

const StyledCardNumber = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  gap: 10px;

  margin-bottom: ${(props: { cardNumberMarginBottom: string }) =>
    props.cardNumberMarginBottom};
`;

const StyledCardBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10px;
`;

const StyledCardHolderName = styled.p`
  width: 55%;
  word-wrap: break-word;
`;

export default function CardPreview({
  canProceed,
  cardCss,
  cardNumber,
  holderName,
  expireDate,
}: {
  canProceed: boolean;
  cardCss: ICardCss;
  cardNumber: ICardNumberState;
  holderName: string;
  expireDate: IExpireDateState;
}) {
  const {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
  } = cardNumber;

  const { month, year } = expireDate;

  const {
    width,
    height,
    fontSize,
    cardContainerMarginBottom,
    cardChipWidth,
    cardChipHeight,
    cardNameMargin,
    cardChipMarginBottom,
    cardNumberMarginBottom,
  } = cardCss;

  return (
    <StyledCardContainer cardContainerMarginBottom={cardContainerMarginBottom}>
      <StyledCard
        isComplete={canProceed}
        width={width}
        height={height}
        fontSize={fontSize}
      >
        <StyledCardName cardNameMargin={cardNameMargin}>
          Woowa Card
        </StyledCardName>
        <StyledCardChip
          cardChipWidth={cardChipWidth}
          cardChipHeight={cardChipHeight}
          cardChipMarginBottom={cardChipMarginBottom}
        />
        <StyledCardNumber cardNumberMarginBottom={cardNumberMarginBottom}>
          <p>{firstCardNumber}</p>
          <p>{secondCardNumber}</p>
          <p>{CREATE_MASKED_CHARACTERS(thirdCardNumber.length)}</p>
          <p>{CREATE_MASKED_CHARACTERS(fourthCardNumber.length)}</p>
        </StyledCardNumber>
        <StyledCardBottomSection>
          <StyledCardHolderName>{holderName}</StyledCardHolderName>
          <p>
            {month} {month.length !== 0 && "/"} {year}
          </p>
        </StyledCardBottomSection>
      </StyledCard>
    </StyledCardContainer>
  );
}
