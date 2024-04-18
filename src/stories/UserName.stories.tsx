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
    userName: [
      { index: 0, currentValue: "J" },
      { index: 1, currentValue: "O" },
      { index: 2, currentValue: "H" },
      { index: 3, currentValue: "N" },
      { index: 4, currentValue: " " },
      { index: 5, currentValue: "D" },
      { index: 6, currentValue: "O" },
      { index: 7, currentValue: "E" },
    ],
  },
};
