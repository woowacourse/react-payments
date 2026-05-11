import type { ValidityPeriod } from "@/types/card";
import type CARD from "@constants/card";
import type { PropsWithChildren } from "react";
import useFormWrapper from "../common/FormContainer";

interface CardInfoFormState extends Record<string, unknown> {
  cardNumber: string;
  validityPeriod: ValidityPeriod;
  CVC: string;
  password: string;
  selectedCardCompany:
    | (typeof CARD.COMPANY_SELECT_FIELD)[number]["value"]
    | null;
}

// interface CardInfoFormContainerProps {
//   children?: (arg: CardInfoFormState) => React.ReactNode;
// }

const INITIAL_FORM_STATE: CardInfoFormState = {
  cardNumber: "",
  validityPeriod: { month: "", year: "" },
  CVC: "",
  password: "",
  selectedCardCompany: null,
};

// const CardInfoFormContainer = ({ children }: CardInfoFormContainerProps) => {
const CardInfoFormContainer = ({ children }: PropsWithChildren) => {
  const { FormWrapper } = useFormWrapper({
    defaultValues: INITIAL_FORM_STATE,
  });
  return <FormWrapper>{children}</FormWrapper>;
};

export default CardInfoFormContainer;
