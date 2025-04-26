import { useState } from "react";
import { UniqueNumberType } from "../../types/CardInformationType";

const useUniqueNumber = () => {
  const [uniqueNumber, setUniqueNumber] = useState<UniqueNumberType>(["", "", "", ""]);

  return { uniqueNumber, setUniqueNumber };
};

export default useUniqueNumber;
