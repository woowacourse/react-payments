import CardPasswordInput from ".";

const Template = (args) => <CardPasswordInput {...args} />;

export default {
  title: "component/CardPasswordInput",
  component: CardPasswordInput,
};

export const Primary = Template.bind({});
Primary.args = {
  password: { firstPassword: "1", secondPassword: "2" },
  handlePassword: () => {},
};
