import CardNameInput from "component/CardNameInput/CardNameInput.component";

export default {
  title: "CardNameInput",
  component: CardNameInput,
};

const Template = (args) => <CardNameInput {...args} />;

export const DefaultCardNameInput = Template.bind({});
DefaultCardNameInput.args = {};

export const SmallCardNameInput = Template.bind({});
SmallCardNameInput.args = {
  size: "small",
};
