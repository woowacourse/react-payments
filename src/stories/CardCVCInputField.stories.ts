import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";

import CardCVCInputField from "@components/CardCVCInputField/CardCVCInputField";

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

export const ErrorNotNumber: Story = {
  args: {
    CVC: "",
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText("123"), "a");
  },
};

export const ErrorEmpty: Story = {
  args: {
    CVC: "",
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByPlaceholderText("123"));
    await userEvent.tab();
  },
};

export const ErrorInvalidLength: Story = {
  args: {
    CVC: "12",
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByDisplayValue("12"));
    await userEvent.tab();
  },
};
