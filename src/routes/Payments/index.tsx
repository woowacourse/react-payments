/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CardInfoContextProvider from "./CardInfoContextProvider";
import CreditCard from "../../components/CreditCard";
import Form from "../../components/Form";
import { Dispatch, SetStateAction, createContext, useState } from "react";

const mainStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "376px",
  margin: "auto",
});

export const FormRenderOrderContext = createContext<
  [FormRenderOrder, Dispatch<SetStateAction<FormRenderOrder>>] | null
>(null);

const Payments = () => {
  const formRenderOrderState = useState<FormRenderOrder>({
    index: 0,
    step: "cardNumbers",
  });

  return (
    <CardInfoContextProvider>
      <FormRenderOrderContext.Provider value={formRenderOrderState}>
        <div css={mainStyle}>
          <CreditCard />
          <Form />
        </div>
      </FormRenderOrderContext.Provider>
    </CardInfoContextProvider>
  );
};

export default Payments;
