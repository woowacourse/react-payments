import type { Meta, StoryObj } from "@storybook/react";
import CardCVCInput from "../../component/AddCardPage/CardDetailForm/CardCVCInput/CardCVCInput";

const meta = {
  component: CardCVCInput,
  title: "Input",
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardCVC: Story = {
  args: {},
};
