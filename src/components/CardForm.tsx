/** @jsxImportSource @emotion/react */

import CardExpiredDate, { CardExpiredDateProps } from "./CardExpirationPeriod";
import CardHolder, { CardHolderProps } from "./CardHolder";
import CardNumbers, { CardNumbersProps } from "./CardNumbers";

import { css } from "@emotion/react";

const styledForm = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface CardFormProps {
  cardNumbers: CardNumbersProps;
  cardExpirationPeriod: CardExpiredDateProps;
  cardHolder: CardHolderProps;
}

export default function CardForm({
  cardNumbers,
  cardExpirationPeriod,
  cardHolder,
}: CardFormProps) {
  return (
    <form css={styledForm}>
      <CardNumbers {...cardNumbers} />
      <CardExpiredDate {...cardExpirationPeriod} />
      <CardHolder {...cardHolder} />
    </form>
  );
}
