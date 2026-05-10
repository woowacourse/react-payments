import type { Meta, StoryObj } from "@storybook/react-vite";

import CompleteCheckIcon from "./CompleteCheckIcon";

const meta = {
  title: "feature/CardRegisterComplete/components/CompleteCheckIcon",
  component: CompleteCheckIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof CompleteCheckIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
