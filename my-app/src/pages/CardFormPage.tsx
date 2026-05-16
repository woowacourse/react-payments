import { css } from "@emotion/react";

import CardForm from "../components/card/CardForm/CardForm";

const CardFormPage = () => {
  return (
    <main css={pageStyle}>
      <CardForm />
    </main>
  );
};

export default CardFormPage;

const pageStyle = css`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
  background-color: #f5f5f5;
`;
