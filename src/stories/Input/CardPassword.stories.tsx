import type { Meta, StoryObj } from "@storybook/react";
import CardPasswordInput from "../../component/AddCardPage/CardDetailForm/CardPasswordInput/CardPasswordInput";

const meta = {
  component: CardPasswordInput,
  title: "Input",
} satisfies Meta<typeof CardPasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardPassword: Story = {
  args: {},
};
