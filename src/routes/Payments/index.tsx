/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CardInfoContextProvider from "./CardInfoContextProvider";
import CreditCard from "../../components/CreditCard";
import Form from "../../components/Form";
import FormContextProvider from "./FormContextProvider";

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
    <div css={mainStyle}>
      <CardInfoContextProvider>
        <CreditCard />
        <FormContextProvider>
          <Form />
        </FormContextProvider>
      </CardInfoContextProvider>
    </div>
  );
};

export default Payments;
