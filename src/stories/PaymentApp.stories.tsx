import { Meta, StoryObj } from "@storybook/react";
import PaymentApp from "../components/PaymentApp";

export default {
  title: "PaymentApp",
  component: PaymentApp,
} as Meta;

type Story = StoryObj<typeof PaymentApp>;

const Template: Story["template"] = (args) => <PaymentApp {...args} />;

export const Default = Template.bind({});
