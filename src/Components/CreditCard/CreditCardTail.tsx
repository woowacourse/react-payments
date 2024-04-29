/** @jsxImportSource @emotion/react */

import useContextWrapper from "../../hooks/useContextWrapper";
import { CardCVCContext } from "../../routes/Payments/CardInfoContextProvider";
import { cardBackStyle, cardPreviewStyle, cvcNumberStyle } from "./style";

const CreditCardTail = () => {
  const COLOR_CATEGORY = "back";

  const cardCVC = useContextWrapper(CardCVCContext)[0];

  return (
    <div css={cardPreviewStyle(COLOR_CATEGORY)}>
      <div css={cardBackStyle}>
        <div css={cvcNumberStyle}>{cardCVC.value}</div>
      </div>
    </div>
  );
};

export default CreditCardTail;
