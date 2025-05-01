import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Component/Dropdown",
  component: Dropdown,
  args: {
    selectedValue: null,
    defaultValue: "아직 선택된 밸류가 없습니다.",
    dropdownList: ["1", "2", "3", "4", "5"],
    onChange: () => {},
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
