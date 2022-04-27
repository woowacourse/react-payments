import CardAddPage from "./CardAddPage.component";

export default {
  title: "CardAddPage",
  component: CardAddPage,
};

const Template = (args) => <CardAddPage {...args} />;

export const DefaultCardAddPage = Template.bind({});

DefaultCardAddPage.args = {};
