import { Meta, StoryObj } from "@storybook/react";
import UserName from "../components/Card/UserName";

const meta = {
  title: "UserName",
  component: UserName,
} satisfies Meta<typeof UserName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: ["JOHN DOE"],
  },
};
