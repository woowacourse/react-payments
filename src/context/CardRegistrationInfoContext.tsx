import { PropsWithChildren, createContext, useState } from "react";
import {
  Card,
  CardCompany,
  CardExpirationDate,
  CardExpirationDateKey,
  CardNumber,
  CardNumberGroups,
  CardPassword,
  CardPasswordKey,
} from "../types";

type CardRegistrationInfoContextType = {
  cardNumber: CardNumber;
  expirationDate: CardExpirationDate;
  ownerName: Card["ownerName"];
  securityCode: Card["securityCode"];
  password: CardPassword;
  cardCompany: Card["cardCompany"];
  cardAlias: Card["alias"];

  setCardNumber: (value: string, targetGroup: CardNumberGroups) => void;
  setExpirationDate: (value: string, dateType: CardExpirationDateKey) => void;
  setOwnerName: (name: string) => void;
  setSecurityCode: (code: string) => void;
  setPassword: (pw: string, targetDigit: CardPasswordKey) => void;
  setCardCompany: (company: CardCompany) => void;
  setCardAlias: (alias: string) => void;
};

export const CardRegistrationInfoContext = createContext<CardRegistrationInfoContextType>({
  cardNumber: {
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  },
  expirationDate: {
    month: "",
    year: "",
  },
  ownerName: "",
  securityCode: "",
  password: {
    first: "",
    second: "",
  },
  cardCompany: "BC",
  cardAlias: "",

  setCardNumber(value: string, targetGroup: CardNumberGroups) {},
  setExpirationDate(value: string, dateType: CardExpirationDateKey) {},
  setOwnerName(name: string) {},
  setSecurityCode(code: string) {},
  setPassword(pw: string, targetDigit: CardPasswordKey) {},
  setCardCompany(company: CardCompany) {},
  setCardAlias(alias: string) {},
});

export const CardRegistrationInfoProvider = ({ children }: PropsWithChildren) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  });

  const [expirationDate, setExpirationDate] = useState<CardExpirationDate>({
    month: "",
    year: "",
  });

  const [ownerName, setOwnerName] = useState<Card["ownerName"]>("");
  const [securityCode, setSecurityCode] = useState<Card["securityCode"]>("");

  const [password, setPassword] = useState<CardPassword>({
    first: "",
    second: "",
  });

  const [cardCompany, setCardCompany] = useState<Card["cardCompany"]>("BC");
  const [cardAlias, setCardAlias] = useState<Card["alias"]>("");

  const handleCardNumber = (value: string, targetGroup: CardNumberGroups) => {
    setCardNumber({ ...cardNumber, [targetGroup]: value });
  };

  const handleExpirationDate = (value: string, dateType: CardExpirationDateKey) => {
    setExpirationDate({ ...expirationDate, [dateType]: value });
  };

  const handleOwnerName = (name: string) => {
    const upperCaseName = name.toUpperCase();

    setOwnerName(upperCaseName);
  };

  const handleSecurityCode = (code: string) => {
    setSecurityCode(code);
  };

  const handlePassword = (pw: string, targetDigit: CardPasswordKey) => {
    setPassword({ ...password, [targetDigit]: pw });
  };

  const handleCardCompany = (company: CardCompany) => {
    setCardCompany(company);
  };

  const handleAlias = (alias: string) => {
    setCardAlias(alias);
  };

  return (
    <CardRegistrationInfoContext.Provider
      value={{
        cardNumber,
        expirationDate,
        ownerName,
        securityCode,
        password,
        cardCompany,
        cardAlias,
        setCardNumber: handleCardNumber,
        setExpirationDate: handleExpirationDate,
        setOwnerName: handleOwnerName,
        setSecurityCode: handleSecurityCode,
        setPassword: handlePassword,
        setCardCompany: handleCardCompany,
        setCardAlias: handleAlias,
      }}
    >
      {children}
    </CardRegistrationInfoContext.Provider>
  );
};
