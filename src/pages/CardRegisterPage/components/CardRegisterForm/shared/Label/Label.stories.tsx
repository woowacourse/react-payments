import type { Meta, StoryObj } from "@storybook/react-vite";

import Label from "./Label";

const meta = {
  title: "feature/CardRegister/components/CardRegisterForm/shared/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    // props
    children: "",
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "LabelTest",
  },
};
