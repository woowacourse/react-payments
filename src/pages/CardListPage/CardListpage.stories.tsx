import GlobalStyle from "../../styles/GlobalStyle";
import CardListPage from "./CardListPage";
import { Layout } from "../../App";

export default {
  title: "CardListPage",
  component: CardListPage,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <Layout>
      <CardListPage />
    </Layout>
  </>
);

export const CardExist = () => (
  <>
    <GlobalStyle />
    <Layout>
      <CardListPage />
    </Layout>
  </>
);
