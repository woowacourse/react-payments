import { Layout } from "../../App";
import GlobalStyle from "../../styled/GlobalStyle";
import CardListPage from "./CardListPage";

export default {
  title: "CardListPage",
  component: CardListPage,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <Layout>
      <CardListPage cards={[]} />
    </Layout>
  </>
);
