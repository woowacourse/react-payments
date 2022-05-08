import LinkButton from "../LinkButton/LinkButton.component";
import PageTitle from "../PageTitle/PageTitle.component";
import Header from "./Header.component";

export default {
  title: "Header",
  component: Header,
};

export const CardAddHeader = (args) => (
  <Header {...args}>
    <LinkButton>{"<"}</LinkButton>
    <PageTitle type="header">카드 추가</PageTitle>
  </Header>
);

CardAddHeader.args = {};
