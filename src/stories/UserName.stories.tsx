import { Meta, StoryObj } from "@storybook/react";
import UserName from "../components/Card/UserName";

const meta = {
  title: "UserName",
  component: UserName,
} satisfies Meta<typeof UserName>;

export default meta;

type Story = StoryObj<typeof meta>;

const userNameMap = new Map<string, string>([["0", "JOHN DOE"]]);

export const Default: Story = {
  args: {
    userName: userNameMap,
  },
};
