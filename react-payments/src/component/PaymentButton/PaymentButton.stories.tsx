import PaymentButton from "component/PaymentButton/PaymentButton.component";

import { Meta, Story } from "@storybook/react";

export default {
  title: "PaymentButton",
  component: PaymentButton,
} as Meta;

const Template: Story = (args) => <PaymentButton {...args}></PaymentButton>;

export const DefaultPaymentButton = Template.bind({});
DefaultPaymentButton.args = {
  children: "결제하기",
};

export const CancelPaymentButton = Template.bind({});
CancelPaymentButton.args = {
  children: "삭제하기",
};
