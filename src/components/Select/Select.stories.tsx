import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
const meta = {
  title: "Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <option>옵션1</option>
      <option>옵션2</option>
      <option>옵션3</option>
      <option>옵션4</option>
    </Select>
  ),
};
