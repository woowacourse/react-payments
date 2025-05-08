import useCardInfo from "./useInput";
import { INITIALIZE_VALUE } from "../../shared/constants/values";
import { CardTypeList } from "../../shared/types/index.types";

export default function useAllCardInfo() {
  const cardNumber = useCardInfo(
    {
      first: INITIALIZE_VALUE,
      second: INITIALIZE_VALUE,
      third: INITIALIZE_VALUE,
      fourth: INITIALIZE_VALUE,
    },
    4
  );

  const expirationPeriod = useCardInfo(
    {
      month: INITIALIZE_VALUE,
      year: INITIALIZE_VALUE,
    },
    2
  );

  const CVCNumber = useCardInfo(
    {
      CVCNumber: INITIALIZE_VALUE,
    },
    3
  );

  const password = useCardInfo(
    {
      password: INITIALIZE_VALUE,
    },
    2
  );

  const cardType = useCardInfo<{ cardType: keyof CardTypeList | "" }>(
    {
      cardType: INITIALIZE_VALUE,
    },
    2
  );

  return { cardNumber, expirationPeriod, CVCNumber, password, cardType };
}
