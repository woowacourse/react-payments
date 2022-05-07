import { action } from "@storybook/addon-actions";
import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";

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
