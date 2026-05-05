import type { Meta, StoryObj } from "@storybook/react-vite";

import CardCVCInputField from "../components/feature/CardCVCInputField";

const meta = {
  title: "CardCVCInputField",
  component: CardCVCInputField,
} satisfies Meta<typeof CardCVCInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    CVC: "",
    onChange: () => {},
  },
};

export const Filled: Story = {
  args: {
    CVC: "123",
    onChange: () => {},
  },
};
