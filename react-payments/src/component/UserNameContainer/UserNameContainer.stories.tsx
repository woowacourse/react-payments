import UserNameContainer from "component/UserNameContainer/UserNameContainer.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "UserNameContainer",
  component: UserNameContainer,
} as Meta;

export const DefaultUserNameContainer: Story = (args) => (
  <UserNameContainer {...args} />
);

DefaultUserNameContainer.args = {};
