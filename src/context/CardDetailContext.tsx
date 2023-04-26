import React, { createContext, PropsWithChildren } from "react";
import useCardNumber from "../hooks/useCardNumber";
import useCardDate from "../hooks/useCardDate";
import useCardOwnerName from "../hooks/useCardOwnerName";
import useCardCVC from "../hooks/useCardCVC";
import useCardPassword from "../hooks/useCardPassword";

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
});

const CardDetailProvider = ({ children }: PropsWithChildren) => {
  const { cardNumberOrigin, cardNumberHidden, changeCardNumber } =
    useCardNumber();
  const { cardDate, changeCardDate } = useCardDate();
  const { cardOwnerName, changeCardOwnerName } = useCardOwnerName();
  const { cardCVC, changeCardCVC } = useCardCVC();
  const { cardPassword, changeCardPassword } = useCardPassword();

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
      }}
    >
      {children}
    </CardDetailContext.Provider>
  );
};

export { CardDetailContext, CardDetailProvider };
