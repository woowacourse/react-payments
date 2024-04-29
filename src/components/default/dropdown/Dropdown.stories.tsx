import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Dropdown, { DropdownProps } from "./Dropdown";

const meta: Meta<DropdownProps> = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectList: ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"],
    onChange: (selectedValue: string) => console.log(selectedValue),
  },
};
