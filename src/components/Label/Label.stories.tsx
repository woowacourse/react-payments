import type { Meta, StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "Component/Label",
  component: Label,
  args: {
    isHidden: false,
    children: "Label Text",
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
