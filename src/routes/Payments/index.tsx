/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CreditCard from "../../components/CreditCard";
import Form from "../../components/Form";
import CardInfoContextProvider from "./CardInfoContextProvider";

const mainStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "376px",
  margin: "auto",
});

const Payments = () => {
  return (
    <CardInfoContextProvider>
      <div css={mainStyle}>
        <CreditCard />
        <Form />
      </div>
    </CardInfoContextProvider>
  );
};

export default Payments;
