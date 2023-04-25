import GlobalStyle from "../../styles/GlobalStyle";
import CardListPage from "./CardListPage";
import { Layout } from "../../App";
import { Card } from "../../types";

export default {
  title: "CardListPage",
  component: CardListPage,
};

const card: Card = {
  cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
  ownerName: "KIM",
  expirationDate: { month: "10", year: "96" },
  securityCode: "123",
  password: { first: "1", second: "2" },
};

export const Default = () => (
  <>
    <GlobalStyle />
    <Layout>
      <CardListPage cards={[]} />
    </Layout>
  </>
);

export const CardExist = () => (
  <>
    <GlobalStyle />
    <Layout>
      <CardListPage cards={[card]} />
    </Layout>
  </>
);
