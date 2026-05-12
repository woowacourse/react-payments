import Button from "@components/common/Button";
import { useFormValue } from "@components/common/FormContainer";

import type { CardInfoFormState } from "../../formState";

const CardInfoFormSubmitButton = () => {
  const { getValue } = useFormValue<CardInfoFormState>();

  const checkIsDisabled = () => {
    const cardNumberStatus = getValue("cardNumberStatus");
    const validityPeriodStatus = getValue("validityPeriodStatus");
    const CVCStatus = getValue("CVCStatus");
    const passwordStatus = getValue("passwordStatus");
    const selectedCardCompany = getValue("selectedCardCompany");

    return !(
      selectedCardCompany &&
      cardNumberStatus.every((status) => status === "SUCCESS") &&
      validityPeriodStatus.month === "DEFAULT" &&
      validityPeriodStatus.year === "DEFAULT" &&
      CVCStatus === "default" &&
      passwordStatus === "default"
    );
  };

  return (
    <Button fullWidth disabled={checkIsDisabled()}>
      완료
    </Button>
  );
};

export default CardInfoFormSubmitButton;
