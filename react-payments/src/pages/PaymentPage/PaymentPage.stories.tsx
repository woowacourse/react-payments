import { Meta, Story } from "@storybook/react";
import PaymentPage from "./PaymentPage.pages";

export default {
  title: "PaymentPage",
  component: PaymentPage,
} as Meta;

const Template: Story = (args) => <PaymentPage {...args} />;

export const DefaultPaymentPage = Template.bind({});
DefaultPaymentPage.args = {};
