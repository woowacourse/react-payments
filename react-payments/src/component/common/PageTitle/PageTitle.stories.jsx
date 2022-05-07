import PageTitle from "./pageTitle.component";

export default {
  title: "Common/PageTitle",
  component: PageTitle,
};

export const CardAddPageTitle = (args) => (
  <PageTitle {...args}>카드 추가</PageTitle>
);
CardAddPageTitle.args = {
  type: "header",
};

export const CardRegisterConfirmTitle = (args) => (
  <PageTitle {...args}>카드 등록이 완료되었습니다.</PageTitle>
);
CardRegisterConfirmTitle.args = {};
