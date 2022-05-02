import CardCVCInput from ".";

const Template = (args) => <CardCVCInput {...args} />;

export default {
  title: "component/CardCVCInput",
  component: CardCVCInput,
};

export const Primary = Template.bind({});
Primary.args = {
  cvc: "111",
  handleDueDate: () => {},
};
