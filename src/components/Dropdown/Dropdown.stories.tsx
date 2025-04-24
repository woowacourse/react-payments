import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Component/Dropdown",
  component: Dropdown,
  args: {
    placeholder: "개노잼 노라라",
    itemList: ["도도", "동아리", "잼잼", "개노잼"],
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
