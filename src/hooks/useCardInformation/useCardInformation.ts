import useUniqueNumber from "./useUniqueNumber";
import useExpirationDate from "./useExpirationDate";
import useCvcNumber from "./useCvcNumber";
import usePassword from "./usePassword";
import useCompany from "./useCompany";
import {
  CardInformationType,
  isErrorCompletesType,
  isStateCompletesType,
  KeysWithout,
  setCardInformationType,
  ValidationType,
} from "../../types/CardInformationType";

const useCardInformation = () => {
  const uniqueNumber = useUniqueNumber();
  const expirationDate = useExpirationDate();
  const cvcNumber = useCvcNumber();
  const password = usePassword();
  const company = useCompany();

  const cardInformation = {
    uniqueNumber,
    expirationDate,
    cvcNumber,
    password,
    company,
  } as const;

  const cardInformationState = Object.fromEntries(
    Object.entries(cardInformation).map(([key, { state }]) => [key, state]),
  ) as CardInformationType;

  const setCardInformationState = Object.fromEntries(
    Object.entries(cardInformation).map(([key, { setState }]) => [key, setState]),
  ) as setCardInformationType;

  const validation = Object.fromEntries(
    (Object.keys(cardInformation) as KeysWithout<typeof cardInformation, "company">[]).map((key) => [
      key,
      {
        isError: cardInformation[key].isError,
        errorMessage: cardInformation[key].errorMessage,
        validateInput: cardInformation[key].validateInput,
      },
    ]),
  ) as ValidationType;

  const isCompletes = Object.fromEntries(
    Object.entries(cardInformation).map(([key, { isComplete }]) => [key, isComplete]),
  ) as isStateCompletesType;

  const isErrorCompletes = Object.fromEntries(
    Object.keys(cardInformation)
      .filter((key): key is KeysWithout<typeof cardInformation, "company"> => key !== "company")
      .map((key) => [key, cardInformation[key].isErrorComplete]),
  ) as isErrorCompletesType;

  return { cardInformationState, setCardInformationState, validation, isCompletes, isErrorCompletes };
};

export default useCardInformation;
