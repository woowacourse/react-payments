import PageTitle from "./pageTitle.component";

export default {
  title: "PageTitle",
  component: PageTitle,
};

const Template = (args) => <PageTitle {...args} />;

export const CardAddPageTitle = Template.bind({});

CardAddPageTitle.args = {
  title: "카드 추가",
};
