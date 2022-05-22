import SecurityCodeContainer from "component/SecurityCodeContainer/SecurityCodeContainer.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "SecurityCodeContainer",
  component: SecurityCodeContainer,
} as Meta;

export const DefaultSecurityCodeContainer: Story = (args) => (
  <SecurityCodeContainer {...args} />
);

DefaultSecurityCodeContainer.args = {};
