import useExpirationDateValidation from "./useExpirationDateValidation";
import useCvcNumberValidation from "./useCvcNumberValidation";
import useUniqueNumberValidation from "./useUniqueNumberValidation";
import { useValidationType } from "../../types/useValidationType";

const useValidation = (): useValidationType => {
  const uniqueNumber = useUniqueNumberValidation();
  const expirationDate = useExpirationDateValidation();
  const cvcNumber = useCvcNumberValidation();

  return {
    uniqueNumber,
    expirationDate,
    cvcNumber,
  };
};

export default useValidation;
