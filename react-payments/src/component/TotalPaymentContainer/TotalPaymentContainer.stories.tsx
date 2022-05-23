import TotalPaymentContainer from "./TotalPaymentContainer";
import { Meta, Story } from "@storybook/react";

export default {
  title: "TotalPaymentContainer",
  component: TotalPaymentContainer,
  decorators: [
    (Story) => (
      <div style={{ width: "375px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<{ price: number }> = (args) => (
  <TotalPaymentContainer {...args} />
);

export const DefaultTotalPaymentContainer = Template.bind({});
DefaultTotalPaymentContainer.args = {
  price: 326000,
};
