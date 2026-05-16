import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";

import CardPasswordInputField from "@components/CardPasswordInputField/CardPasswordInputField";

const meta = {
  title: "CardPasswordInputField",
  component: CardPasswordInputField,
} satisfies Meta<typeof CardPasswordInputField>;

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

export const ErrorNotNumber: Story = {
  args: {
    password: "",
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText("••"), "a");
  },
};

export const ErrorEmpty: Story = {
  args: {
    password: "",
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByPlaceholderText("••"));
    await userEvent.tab();
  },
};

export const ErrorInvalidLength: Story = {
  args: {
    password: "1",
    onChange: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByDisplayValue("1"));
    await userEvent.tab();
  },
};
