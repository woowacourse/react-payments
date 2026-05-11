import type { Meta, StoryObj } from "@storybook/react-vite";

import CardPasswordField from "../components/feature/CardInfoForm/components/CardPasswordField";

const meta = {
  title: "CardPasswordField",
  component: CardPasswordField,
} satisfies Meta<typeof CardPasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    password: "",
    onChange: () => {},
  },
};

export const Filled: Story = {
  args: {
    password: "12",
    onChange: () => {},
  },
};
