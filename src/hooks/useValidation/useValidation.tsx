import useExpirationDateValidation from "./useExpirationDateValidation";
import useCvcNumberValidation from "./useCvcNumberValidation";
import useUniqueNumberValidation from "./useUniqueNumberValidation";
import { useValidationType } from "../../types/useValidationType";
import usePasswordValidation from "./usePasswordValidation";

const useValidation = (): useValidationType => {
  const uniqueNumber = useUniqueNumberValidation();
  const expirationDate = useExpirationDateValidation();
  const cvcNumber = useCvcNumberValidation();
  const password = usePasswordValidation();

  return {
    uniqueNumber,
    expirationDate,
    cvcNumber,
    password,
  };
};

export default useValidation;
