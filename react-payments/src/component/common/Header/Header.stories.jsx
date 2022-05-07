import LinkButton from "../LinkButton/linkButton.component";
import PageTitle from "../PageTitle/pageTitle.component";
import Header from "./Header.component";

export default {
  title: "Common/Header",
  component: Header,
};

export const CardAddHeader = (args) => (
  <Header {...args}>
    <LinkButton>{"<"}</LinkButton>
    <PageTitle type="header">카드 추가</PageTitle>
  </Header>
);

CardAddHeader.args = {};
