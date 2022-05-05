import CardTypeSelector from "./CardTypeSelector";
import { action } from "@storybook/addon-actions";

export default {
  title: "CardTypeSelector",
  component: CardTypeSelector,
};

const Template = (args) => <CardTypeSelector {...args} />;

export const DefaultCardTypeSelector = Template.bind({});
DefaultCardTypeSelector.args = {
  currentCardType: "pocoCard",
  onClickCardType: action("clicked"),
};
