import { useState } from "react";
import { ExpirationDateType } from "../../types/CardInformationType";

const useExpirationDate = () => {
  const [expirationDate, setExpirationDate] = useState<ExpirationDateType>(["", ""]);

  return { expirationDate, setExpirationDate };
};

export default useExpirationDate;
