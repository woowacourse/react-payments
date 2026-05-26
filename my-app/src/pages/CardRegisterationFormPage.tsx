import { css } from "@emotion/react";

import CardRegisterationForm from "../components/cardRegisteration/CardRegisterationForm/CardRegisterationForm.tsx";

const CardRegisterationFormPage = () => {
  return (
    <main css={pageStyle}>
      <CardRegisterationForm />
    </main>
  );
};

export default CardRegisterationFormPage;

const pageStyle = css`
  display: flex;
  min-height: 100vh;
  width: 100vw;
  align-items: flex-start;
  justify-content: center;
  padding-top: 60px;
  background-color: #f5f5f5;
`;
