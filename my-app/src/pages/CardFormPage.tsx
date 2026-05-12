import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import CardForm from "../components/card/CardForm/CardForm";

const CardFormPage = () => {
  const navigate = useNavigate();

  return (
    <main css={pageStyle}>
      <CardForm
        onSubmit={(publicCardInfo) => {
          navigate("/completed", { state: publicCardInfo });
        }}
      />
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
