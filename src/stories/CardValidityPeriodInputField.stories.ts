import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";

import CardValidityPeriodInputField from "@/components/CardRegister/CardValidityPeriodInputField/CardValidityPeriodInputField";

const meta = {
  title: "CardValidityPeriodInputField",
  component: CardValidityPeriodInputField,
} satisfies Meta<typeof CardValidityPeriodInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    validityPeriod: { month: "", year: "" },
    onChange: () => {},
    onNextStep: () => {},
  },
};

export const Partial: Story = {
  args: {
    validityPeriod: { month: "1", year: "" },
    onChange: () => {},
    onNextStep: () => {},
  },
};

export const Filled: Story = {
  args: {
    validityPeriod: { month: "04", year: "26" },
    onChange: () => {},
    onNextStep: () => {},
  },
};

export const FilledMaxMonth: Story = {
  args: {
    validityPeriod: { month: "12", year: "99" },
    onChange: () => {},
    onNextStep: () => {},
  },
};

export const ErrorNotNumber: Story = {
  args: {
    validityPeriod: { month: "", year: "" },
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByPlaceholderText("MM"), "a");
  },
};

export const ErrorEmptyMonth: Story = {
  args: {
    validityPeriod: { month: "", year: "" },
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByPlaceholderText("MM"));
    await userEvent.tab();
  },
};

export const ErrorInvalidMonthRange: Story = {
  args: {
    validityPeriod: { month: "13", year: "" },
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByDisplayValue("13"));
    await userEvent.tab();
  },
};

export const ErrorEmptyYear: Story = {
  args: {
    validityPeriod: { month: "12", year: "" },
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByPlaceholderText("YY"));
    await userEvent.tab();
  },
};

export const ErrorExpiredValidityPeriod: Story = {
  args: {
    validityPeriod: { month: "01", year: "20" },
    onChange: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByDisplayValue("20"));
    await userEvent.tab();
  },
};
