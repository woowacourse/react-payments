import { useState } from "react";
import { ExpirationDateType, SetValueFn } from "../../types/CardInformationType";
import { EXPIRATION_DATE_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";

const useExpirationDate = () => {
  const [expirationDate, setExpirationDateState] = useState<ExpirationDateType>(["", ""]);

  const setExpirationDate: SetValueFn<ExpirationDateType[number]> = (value, index) => {
    if (index === undefined) return;

    setExpirationDateState((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated as ExpirationDateType;
    });
  };

  const isExpirationDateComplete = useCheckLengthComplete(expirationDate, EXPIRATION_DATE_MAX_LENGTH);

  return { expirationDate, setExpirationDate, isExpirationDateComplete };
};

export default useExpirationDate;
