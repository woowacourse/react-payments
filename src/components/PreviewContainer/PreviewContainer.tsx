/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import PreviewCard from "../PreviewCard/PreviewCard";
import { CardType } from "../../types/CardInformationType";
import { CardInformationType } from "../../types/CardInformationType";

const PreviewContainer = ({ cardType, cardState }: { cardState: CardInformationType; cardType: CardType }) => {
  return (
    <div css={PreviewCardContainerStyle}>
      <PreviewCard
        cardType={cardType}
        uniqueNumber={cardState.uniqueNumber}
        expirationDate={cardState.expirationDate}
      />
    </div>
  );
};

export default PreviewContainer;

const PreviewCardContainerStyle = css`
  display: flex;
  justify-content: center;
`;
