import CardRegisterPage from "./CardRegisterPage.component";

export default {
  title: "CardRegisterPage",
  component: CardRegisterPage,
};

const Template = (args) => <CardRegisterPage {...args} />;

export const DefaultCardRegisterPage = Template.bind({});

DefaultCardRegisterPage.args = {};
