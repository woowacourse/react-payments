/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import useContextWrapper from "../../hooks/useContextWrapper";
import { FormRenderOrderContext } from "../../routes/Payments";
import SubmitButton from "../Button/SubmitButton";

import CardCVCField from "../FormField/CardCVCField";
import CardIssuerField from "../FormField/CardIssuerField";
import CardNumberField from "../FormField/CardNumberField";
import CardOwnerField from "../FormField/CardOwnerField";
import CardPasswordField from "../FormField/CardPasswordField";
import CardValidityPeriodField from "../FormField/CardValidityPeriodField";

import FormRefContextProvider from "./FormRefContextProvider";

import { formStyle } from "./style";

import useIsCardInfoValid from "./useIsValid";

interface Target extends EventTarget {
  firstNumbers: {
    value: string;
  };
  cardIssuer: {
    value: string;
  };
}

interface FormEvent extends React.FormEvent<HTMLFormElement> {
  target: Target;
}

const Form = () => {
  const renderOrder = useContextWrapper(FormRenderOrderContext)[0];
  const isValid = useIsCardInfoValid();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target;
    const firstNumbers = target.firstNumbers.value;
    const issuer = target.cardIssuer.value;
    navigate(`/landing_arrival`, { state: { firstNumbers, issuer } });
  };

  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <FormRefContextProvider>
        {renderOrder.index > 4 && <CardPasswordField />}
        {renderOrder.index > 3 && <CardCVCField />}
        {renderOrder.index > 2 && <CardOwnerField />}
        {renderOrder.index > 1 && <CardValidityPeriodField />}
        {renderOrder.index > 0 && <CardIssuerField />}
        <CardNumberField />
        {isValid && <SubmitButton />}
      </FormRefContextProvider>
    </form>
  );
};

export default Form;
