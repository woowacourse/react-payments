import Button from "@components/common/Button";
import { useFormValue } from "../../formContext";


const CardInfoFormSubmitButton = () => {
  const { getValue } = useFormValue();

  const checkIsDisabled = () => {
    const cardNumberStatus = getValue("cardNumberStatus");
    const validityPeriodStatus = getValue("validityPeriodStatus");
    const CVCStatus = getValue("CVCStatus");
    const passwordStatus = getValue("passwordStatus");
    const selectedCardCompany = getValue("selectedCardCompany");

    return !(
      selectedCardCompany &&
      cardNumberStatus.every((status) => status === "SUCCESS") &&
      validityPeriodStatus.month === "SUCCESS" &&
      validityPeriodStatus.year === "SUCCESS" &&
      CVCStatus === "SUCCESS" &&
      passwordStatus === "SUCCESS"
    );
  };

  return (
    <Button fullWidth disabled={checkIsDisabled()}>
      완료
    </Button>
  );
};

export default CardInfoFormSubmitButton;
