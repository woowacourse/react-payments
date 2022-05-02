import CardOwnerInput from ".";

const Template = (args) => <CardOwnerInput {...args} />;

export default {
  title: "component/CardOwnerInput",
  component: CardOwnerInput,
};

export const Primary = Template.bind({});
Primary.args = {
  owner: "KOY",
  handleOwner: () => {},
};
