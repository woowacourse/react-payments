import GlobalStyle from "../../styles/GlobalStyle";
import { Card } from "../../types";
import CardList from "./CardList";

export default {
  title: "CardList",
  component: CardList,
};

const card: Card = {
  cardName: "",
  cardCompany: "현대카드",
  cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
  ownerName: "KIM",
  expirationDate: { month: "10", year: "96" },
  securityCode: "123",
  password: { first: "1", second: "2" },
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardList cards={[]} />
  </>
);

export const SingleCard = () => (
  <>
    <GlobalStyle />
    <CardList cards={[card]} />
  </>
);

export const ManyCards = () => (
  <>
    <GlobalStyle />
    <CardList cards={[card, card, card, card, card]} />
  </>
);
