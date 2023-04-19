import { Layout } from "../../App";
import GlobalStyle from "../../styled/GlobalStyle";
import AddCardPage from "./AddCardPage";

export default {
  title: "AddCardPage",
  component: AddCardPage,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <Layout>
      <AddCardPage onSubmit={() => {}} />
    </Layout>
  </>
);
