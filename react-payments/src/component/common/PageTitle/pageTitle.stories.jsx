import PageTitle from "./pageTitle.component";

export default {
  title: "PageTitle",
  component: PageTitle,
};

export const CardAddPageTitle = (args) => (
  <PageTitle {...args}>카드 추가</PageTitle>
);
CardAddPageTitle.args = {};
