/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import CardInfoContextProvider from "./CardInfoContextProvider";
import CreditCard from "../../components/CreditCard";
import Form from "../../components/Form";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import FormContextProvider from "./FormContextProvider";

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
    <div css={mainStyle}>
      <CardInfoContextProvider>
        <CreditCard />
        <FormContextProvider>
          <FormRenderOrderContext.Provider value={formRenderOrderState}>
            <Form />
          </FormRenderOrderContext.Provider>
        </FormContextProvider>
      </CardInfoContextProvider>
    </div>
  );
};

export default Payments;
