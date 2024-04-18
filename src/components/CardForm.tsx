/** @jsxImportSource @emotion/react */

import CardExpiredDate from "./CardExpiredDate";
import CardHolder from "./CardHolder";
import CardNumbers from "./CardNumbers";
import { css } from "@emotion/react";

const styledForm = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function CardForm() {
  return (
    <form css={styledForm}>
      <CardNumbers />
      <CardExpiredDate />
      <CardHolder />
    </form>
  );
}
