/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PreviewCard from "../PreviewCard/PreviewCard";
import { CardType, CardInformationType } from "../../types/CardInformationType";

const PreviewContainer = ({
  cardInformationState,
  cardType,
}: {
  cardInformationState: CardInformationType;
  cardType: CardType;
}) => {
  return (
    <div css={PreviewCardContainerStyle}>
      <PreviewCard cardInformationState={cardInformationState} cardType={cardType} />
    </div>
  );
};

export default PreviewContainer;

const PreviewCardContainerStyle = css`
  display: flex;
  justify-content: center;
`;
