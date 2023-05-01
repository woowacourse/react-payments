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
  changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  cardNumberHidden: "",
  cardNumberOrigin: "",
  changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  cardDate: "",
  changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  cardOwnerName: "",
  changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  },
  cardCVC: "",
  changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e);
  },
  cardPassword: ["", ""] as [string, string],
  cardCompany: DEFAULT_COMPANY as CardCompany,
  changeCompany: (card: CardCompany) => {
    console.log(card);
  },
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
