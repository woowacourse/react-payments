import { Meta, StoryObj } from "@storybook/react";
import UserName from "../components/Card/UserName";

export default {
  title: "UserName",
  component: UserName,
} as Meta;

type Story = StoryObj<typeof UserName>;

const Template: Story["template"] = (args) => <UserName {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: [
    { index: "0", currentValue: "J" },
    { index: "1", currentValue: "O" },
    { index: "2", currentValue: "H" },
    { index: "3", currentValue: "N" },
    { index: "4", currentValue: " " },
    { index: "5", currentValue: "D" },
    { index: "6", currentValue: "O" },
    { index: "7", currentValue: "E" },
  ],
};
