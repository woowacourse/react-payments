import useUniqueNumber from "./useUniqueNumber";
import useExpirationDate from "./useExpirationDate";
import useCvcNumber from "./useCvcNumber";
import usePassword from "./usePassword";
import useCompany from "./useCompany";
import { CardInformationType, setCardInformationType } from "../../types/CardInformationType";

const useCardInformation = () => {
  const { uniqueNumber, setUniqueNumber } = useUniqueNumber();
  const { expirationDate, setExpirationDate } = useExpirationDate();
  const { cvcNumber, setCvcNumber } = useCvcNumber();
  const { password, setPassword } = usePassword();
  const { company, setCompany } = useCompany();

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

  return { cardInformationState, setCardInformationState };
};

export default useCardInformation;
