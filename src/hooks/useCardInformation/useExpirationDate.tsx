import { useState } from "react";
import { ExpirationDateType } from "../../types/CardInformationType";
import { EXPIRATION_DATE_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";

const useExpirationDate = () => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>(["", ""]);

  const isExpirationDateComplete = useCheckLengthComplete(expirationDate, EXPIRATION_DATE_MAX_LENGTH);

  return { expirationDate, setExpirationDate, isExpirationDateComplete };
};

export default useExpirationDate;
