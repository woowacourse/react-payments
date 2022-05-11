import LinkButton from "component/common/LinkButton/LinkButton.component";
import PageTitle from "component/common/PageTitle/PageTitle.component";
import Header from "component/common/Header/Header.component";

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
