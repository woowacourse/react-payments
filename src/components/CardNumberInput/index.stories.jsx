import CardNumberInput from ".";

const Template = (args) => <CardNumberInput {...args} />;

export default {
  title: "component/CardNumberInput",
  component: CardNumberInput,
};

export const Primary = Template.bind({});
Primary.args = {
  cardNumbers: ["1111", "2222", "3333", "4444"],
  cardNumberInputRefs: [],
  handleCardNumber: () => {},
};
