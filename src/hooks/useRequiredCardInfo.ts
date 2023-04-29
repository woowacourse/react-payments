import { CardInfoContext } from "../components/provider/CardInfoProvider";
import { useContext, useEffect, useState } from "react";
import { isValidInfo } from "validation";

const useRequiredCardInfo = () => {
  const allCardInfo = useContext(CardInfoContext).cardInfo;
  const areAllInputsFilled = isValidInfo(allCardInfo);

  const [isFormFilled, setIsFormFilled] = useState(false);

  useEffect(() => {
    setIsFormFilled(areAllInputsFilled);
  }, [areAllInputsFilled]);

  return { isFormFilled };
};

export default useRequiredCardInfo;
