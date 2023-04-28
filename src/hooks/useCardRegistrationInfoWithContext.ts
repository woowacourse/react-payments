import { useContext } from "react";
import {
  CardNumberContext,
  ExpirationDateContext,
  OwnerNameContext,
  PasswordContext,
  SecurityCodeContext,
  CardCompanyContext,
  CardAliasContext,
} from "../context/CardRegistrationInfoContext";
import { Card } from "../types";

const context: Record<keyof Card, React.Context<any>> = {
  cardNumber: CardNumberContext,
  expirationDate: ExpirationDateContext,
  ownerName: OwnerNameContext,
  password: PasswordContext,
  securityCode: SecurityCodeContext,
  cardCompany: CardCompanyContext,
  alias: CardAliasContext,
};
const useCardRegistrationInfoWithContext = (infoType: keyof Card) => {
  const value = useContext(context[infoType]);

  return value;
};

export default useCardRegistrationInfoWithContext;
