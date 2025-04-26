import { useState } from "react";
import { UniqueNumberType } from "../../types/CardInformationType";
import useCheckLengthComplete from "../useCheckLengthComplete";
import { UNIQUE_NUMBER_MAX_LENGTH } from "../../constants/constant";

const useUniqueNumber = () => {
  const [uniqueNumber, setUniqueNumber] = useState<UniqueNumberType>(["", "", "", ""]);

  const isUniqueNumberComplete = useCheckLengthComplete(uniqueNumber, UNIQUE_NUMBER_MAX_LENGTH);

  return { uniqueNumber, setUniqueNumber, isUniqueNumberComplete };
};

export default useUniqueNumber;
