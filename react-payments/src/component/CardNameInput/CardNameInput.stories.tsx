import CardNameInput, {
  CardNameInputProps,
} from "component/CardNameInput/CardNameInput.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "CardNameInput",
  component: CardNameInput,
} as Meta;

const Template: Story<CardNameInputProps> = (args) => (
  <CardNameInput {...args} />
);

export const DefaultCardNameInput = Template.bind({});
DefaultCardNameInput.args = {
  ready: true,
};

export const SmallCardNameInput = Template.bind({});
SmallCardNameInput.args = {
  styleSize: "small",
  ready: true,
};
