/** @jsxImportSource @emotion/react */
import useContextWrapper from "../../hooks/useContextWrapper";

import { FormRenderOrderContext } from "../../routes/Payments";
import SubmitButton from "../Button/SubmitButton";

import CardCVCField from "../FormField/CardCVCField";
import CardIssuerField from "../FormField/CardIssuerField";
import CardNumberField from "../FormField/CardNumberField";
import CardOwnerField from "../FormField/CardOwnerField";
import CardPasswordField from "../FormField/CardPasswordField";
import CardValidityPeriodField from "../FormField/CardValidityPeriodField";
import FormContextProvider from "./FormContextProvider";
import FormRefContextProvider from "./FormRefContextProvider";
import { formStyle } from "./style";

const Form = () => {
  const renderOrder = useContextWrapper(FormRenderOrderContext)[0];

  return (
    <form css={formStyle}>
      <FormContextProvider>
        <FormRefContextProvider>
          {renderOrder.index > 4 && <CardPasswordField />}
          {renderOrder.index > 3 && <CardCVCField />}
          {renderOrder.index > 2 && <CardOwnerField />}
          {renderOrder.index > 1 && <CardValidityPeriodField />}
          {renderOrder.index > 0 && <CardIssuerField />}
          <CardNumberField />
          <SubmitButton />
        </FormRefContextProvider>
      </FormContextProvider>
    </form>
  );
};

export default Form;
