import { Meta, StoryObj } from "@storybook/react";
import ExpirationDateForm from "../components/Form/ExpirationDateForm";

export default {
  title: "ExpirationDateForm",
  component: ExpirationDateForm,
} as Meta;

type Story = StoryObj<typeof ExpirationDateForm>;

const Template: Story["template"] = (args) => <ExpirationDateForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelContent: "Expiration Date",
  inputCount: 2,
  type: "text",
  placeholders: ["MM", "YY"],
};
