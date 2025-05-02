import { useState } from "react";
import { SetValueFn, UniqueNumberType } from "../../types/CardInformationType";
import { UNIQUE_NUMBER_MAX_LENGTH } from "../../constants/constant";
import useCheckLengthComplete from "../common/useCheckLengthComplete";

const useUniqueNumber = () => {
  const [uniqueNumber, setUniqueNumberState] = useState<UniqueNumberType>(["", "", "", ""]);

  const setUniqueNumber: SetValueFn<UniqueNumberType[number]> = (value, index) => {
    if (index === undefined) return;

    setUniqueNumberState((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated as UniqueNumberType;
    });
  };

  const isUniqueNumberComplete = useCheckLengthComplete(uniqueNumber, UNIQUE_NUMBER_MAX_LENGTH);

  return { uniqueNumber, setUniqueNumber, isUniqueNumberComplete };
};

export default useUniqueNumber;
