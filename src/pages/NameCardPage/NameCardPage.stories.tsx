import GlobalStyle from "../../styles/GlobalStyle";
import NameCardPage from "./NameCardPage";
import { Layout } from "../../App";

export default {
  title: "NameCardPage",
  component: NameCardPage,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <Layout>
      <NameCardPage />
    </Layout>
  </>
);
