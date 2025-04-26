import useUniqueNumber from "./useUniqueNumber";
import useExpirationDate from "./useExpirationDate";
import useCvcNumber from "./useCvcNumber";
import usePassword from "./usePassword";
import useCompany from "./useCompany";
import { CardInformationType, setCardInformationType } from "../../types/CardInformationType";

const useCardInformation = () => {
  const { uniqueNumber, setUniqueNumber, isUniqueNumberComplete } = useUniqueNumber();
  const { expirationDate, setExpirationDate, isExpirationDateComplete } = useExpirationDate();
  const { cvcNumber, setCvcNumber, isCvcNumberComplete } = useCvcNumber();
  const { password, setPassword, isPasswordComplete } = usePassword();
  const { company, setCompany, isCompanyComplete } = useCompany();

  const cardInformationState: CardInformationType = {
    uniqueNumber,
    expirationDate,
    cvcNumber,
    password,
    company,
  };

  const setCardInformationState: setCardInformationType = {
    uniqueNumber: setUniqueNumber,
    expirationDate: setExpirationDate,
    cvcNumber: setCvcNumber,
    password: setPassword,
    company: setCompany,
  };

  const isStateCompletes = {
    uniqueNumber: isUniqueNumberComplete,
    expirationDate: isExpirationDateComplete,
    cvcNumber: isCvcNumberComplete,
    password: isPasswordComplete,
    company: isCompanyComplete,
  };

  return { cardInformationState, setCardInformationState, isStateCompletes };
};

export default useCardInformation;
