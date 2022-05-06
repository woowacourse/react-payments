import CardNameInput from "./CardNameInput.component";

export default {
  title: "CardNameInput",
  component: CardNameInput,
};

export const FailedCardNameInput = (args) => <CardNameInput {...args} />;

FailedCardNameInput.args = {};

export const SuccessCardNameInput = (args) => <CardNameInput {...args} />;

SuccessCardNameInput.args = { ready: true };
