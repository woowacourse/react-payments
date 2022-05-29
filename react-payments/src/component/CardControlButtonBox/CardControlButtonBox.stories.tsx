import CardControlButtonBox, {
  CardControlButtonBoxProps,
} from "component/CardControlButtonBox/CardControlButtonBox.component";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "CardControlButtonBox",
  component: CardControlButtonBox,
} as Meta;

const Template: Story<CardControlButtonBoxProps> = (args) => (
  <CardControlButtonBox {...args} />
);

export const DefaultCardControlButtonBox = Template.bind({});
DefaultCardControlButtonBox.args = {
  handleEditCard: action("handleEditCard"),
  handleDeleteCard: async () => {
    action("handleDeleteCard")();
  },
};
