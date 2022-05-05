import CardNumberContainer from "./CardNumberContainer.component";

export default {
  title: "CardNumberContainer",
  component: CardNumberContainer,
};

export const DefaultCardNumberContainer = (args) => (
  <CardNumberContainer {...args} />
);

DefaultCardNumberContainer.args = {};
