import CardAddForm, { CardAddFormProps } from "./CardAddForm.component";
import { Meta, Story } from "@storybook/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "CardAddForm",
  component: CardAddForm,
} as Meta;

export const DefaultCardAddForm: Story<CardAddFormProps> = (args) => (
  <CardAddForm {...args} />
);

DefaultCardAddForm.args = {
  toggleShowModal: action("toggleShowModal"),
  id: undefined,
};
