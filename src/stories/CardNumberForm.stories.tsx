import { Meta, StoryObj } from "@storybook/react";
import CardNumberForm from "../components/Form/CardNumberForm";

export default {
  title: "CardNumberForm",
  component: CardNumberForm,
} as Meta;

type Story = StoryObj<typeof CardNumberForm>;

const Template: Story["template"] = (args) => <CardNumberForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelContent: "Card Number",
  inputCount: 4,
  type: "text",
  placeholders: ["1234", "1234", "1234", "1234"],
};
