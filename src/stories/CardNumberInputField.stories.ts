import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";

import CardNumberInputField from "@/components/CardRegister/CardNumberInputField/CardNumberInputField";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
} satisfies Meta<typeof CardNumberInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardNumberUnits: ["", "", "", ""],
    onChange: () => {},
    onNextStep: () => {},
  },
};

export const Filled: Story = {
  args: {
    cardNumberUnits: ["1234", "5678", "1234", "5678"],
    onChange: () => {},
    onNextStep: () => {},
  },
};

export const ErrorNotNumber: Story = {
  args: {
    cardNumberUnits: ["", "", "", ""],
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getAllByPlaceholderText("1234")[0], "a");
  },
};

export const ErrorEmpty: Story = {
  args: {
    cardNumberUnits: ["", "", "", ""],
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getAllByPlaceholderText("1234")[0]);
    await userEvent.tab();
  },
};

export const ErrorInvalidLength: Story = {
  args: {
    cardNumberUnits: ["123", "", "", ""],
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByDisplayValue("123"));
    await userEvent.tab();
  },
};
