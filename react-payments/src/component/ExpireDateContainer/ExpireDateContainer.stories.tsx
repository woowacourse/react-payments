import ExpireDateContainer from "component/ExpireDateContainer/ExpireDateContainer.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "ExpireDateContainer",
  component: ExpireDateContainer,
} as Meta;

export const DefaultExpireDateContainer: Story = (args) => (
  <ExpireDateContainer {...args} />
);

DefaultExpireDateContainer.args = {};
