import React, { createContext, PropsWithChildren } from "react";
import useCardNumber from "../hooks/useCardNumber";
import useCardDate from "../hooks/useCardDate";
import useCardOwnerName from "../hooks/useCardOwnerName";
import useCardCVC from "../hooks/useCardCVC";
import useCardPassword from "../hooks/useCardPassword";
import useCardCompany from "../hooks/useCardCompany";
import { CardCompany } from "../types/card";
import { DEFAULT_COMPANY } from "../abstract/constants";

const CardDetailContext = createContext({
  // eslint-disable-next-line
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => {},
  cardNumberHidden: "",
  cardNumberOrigin: "",
  // eslint-disable-next-line
  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => {},
  cardDate: "",
  // eslint-disable-next-line
  changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => {},
  cardOwnerName: "",
  // eslint-disable-next-line
  changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => {},
  cardCVC: "",
  // eslint-disable-next-line
  changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => {},
  cardPassword: ["", ""] as [string, string],
  cardCompany: DEFAULT_COMPANY as CardCompany,
  // eslint-disable-next-line
  changeCompany: (card: CardCompany) => {},
});

const CardDetailProvider = ({ children }: PropsWithChildren) => {
  const { cardNumberOrigin, cardNumberHidden, changeCardNumber } =
    useCardNumber();
  const { cardDate, changeCardDate } = useCardDate();
  const { cardOwnerName, changeCardOwnerName } = useCardOwnerName();
  const { cardCVC, changeCardCVC } = useCardCVC();
  const { cardPassword, changeCardPassword } = useCardPassword();
  const { cardCompany, changeCompany } = useCardCompany();

  return (
    <CardDetailContext.Provider
      value={{
        changeCardNumber,
        cardNumberHidden,
        cardNumberOrigin,
        changeCardDate,
        cardDate,
        changeCardOwnerName,
        cardOwnerName,
        changeCardCVC,
        cardCVC,
        changeCardPassword,
        cardPassword,
        cardCompany,
        changeCompany,
      }}
    >
      {children}
    </CardDetailContext.Provider>
  );
};

export { CardDetailContext, CardDetailProvider };
