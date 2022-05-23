import PaymentLabel from "component/PaymentLabel/PaymentLabel";
import { Meta, Story } from "@storybook/react";

export default {
  title: "PaymentLabel",
  component: PaymentLabel,
} as Meta;

const Template: Story = (args) => <PaymentLabel {...args}></PaymentLabel>;

export const TermsOfUseLabel = Template.bind({});
TermsOfUseLabel.args = {
  children: "약간 이용 및 동의",
};

export const DefaultPaymentLabel = Template.bind({});
DefaultPaymentLabel.args = {
  children: "결제금액",
};

export const HoldingCardLabel = Template.bind({});
HoldingCardLabel.args = {
  as: "span",
  styleType: "holding-card",
  children: "보유카드",
};
