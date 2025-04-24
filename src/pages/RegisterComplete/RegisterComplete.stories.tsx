import type { Meta, StoryObj } from "@storybook/react";
import RegisterComplete from "./RegisterComplete";

const meta = {
  title: "RegisterComplete",
  component: RegisterComplete,
  tags: ["autodocs"],
} satisfies Meta<typeof RegisterComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
