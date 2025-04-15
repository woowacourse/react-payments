import type { Meta, StoryObj } from "@storybook/react";
import NumberInput from "../components/NumberInput/NumberInput";

const meta = {
  title: "NumberInput",
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const CardNumber: Story = {};
export const CVCNumber: Story = {};
export const Expiration: Story = {};
