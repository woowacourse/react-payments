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

export const CardNumberContext = createContext({
  cardNumber: {
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  },

  handleCardNumber(value: string, targetGroup: CardNumberGroups) {},
});

export const ExpirationDateContext = createContext({
  expirationDate: {
    month: "",
    year: "",
  },

  handleExpirationDate(value: string, dateType: CardExpirationDateKey) {},
});

export const OwnerNameContext = createContext({
  ownerName: "",
  handleOwnerName(name: string) {},
});

export const SecurityCodeContext = createContext({
  securityCode: "",
  handleSecurityCode(code: string) {},
});

export const PasswordContext = createContext({
  password: {
    first: "",
    second: "",
  },

  handlePassword(pw: string, targetDigit: CardPasswordKey) {},
});

export const CardCompanyContext = createContext({
  cardCompany: "BC",

  handleCardCompany(company: CardCompany) {},
});

export const CardAliasContext = createContext({
  cardAlias: "",

  handleAlias(alias: string) {},
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
    <CardNumberContext.Provider value={{ cardNumber, handleCardNumber }}>
      <ExpirationDateContext.Provider value={{ expirationDate, handleExpirationDate }}>
        <OwnerNameContext.Provider value={{ ownerName, handleOwnerName }}>
          <SecurityCodeContext.Provider value={{ securityCode, handleSecurityCode }}>
            <PasswordContext.Provider value={{ password, handlePassword }}>
              <CardCompanyContext.Provider value={{ cardCompany, handleCardCompany }}>
                <CardAliasContext.Provider value={{ cardAlias, handleAlias }}>{children}</CardAliasContext.Provider>
              </CardCompanyContext.Provider>
            </PasswordContext.Provider>
          </SecurityCodeContext.Provider>
        </OwnerNameContext.Provider>
      </ExpirationDateContext.Provider>
    </CardNumberContext.Provider>
  );
};
