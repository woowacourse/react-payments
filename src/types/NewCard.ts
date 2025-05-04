import { CardNumbers } from "./CardNumbers";
import CardExpirationDate from "./CardExpirationDate";

type NewCard = {
  cardNumbers: CardNumbers;
  cardExpirationDate: CardExpirationDate;
  cardCompany: string;
  cardPassword: string;
  cardOwnerName: string;
};

export default NewCard;
