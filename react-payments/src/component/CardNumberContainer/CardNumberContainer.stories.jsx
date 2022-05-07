import CardNumberContainer from "component/CardNumberContainer/CardNumberContainer.component";

export default {
  title: "CardNumberContainer",
  component: CardNumberContainer,
};

export const DefaultCardNumberContainer = (args) => (
  <CardNumberContainer {...args} />
);

DefaultCardNumberContainer.args = {};
