import { useState } from "react";
import { CvcNumberType, SetValueFn } from "../../types/CardInformationType";
import { CVC_NUMBER_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";

const useCvcNumber = () => {
  const [cvcNumber, setCvcNumberState] = useState<CvcNumberType>("");
  const setCvcNumber: SetValueFn<CvcNumberType> = (value) => setCvcNumberState(value);
  const isCvcNumberComplete = useCheckLengthComplete(cvcNumber, CVC_NUMBER_MAX_LENGTH);

  return { cvcNumber, setCvcNumber, isCvcNumberComplete };
};

export default useCvcNumber;
