import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, userEvent, within } from "storybook/test";

import { CardCVCInput } from "./CardCVCInput";

const meta = {
  title: "CardCVCInput",
  component: CardCVCInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardCVCInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const InvalidTypeInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "abc");
    await expect(
      canvas.getByText("숫자만 입력 가능합니다."),
    ).toBeInTheDocument();
  },
};

export const InvalidCVCLength: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "12");
    await userEvent.tab();
    await expect(
      canvas.getByText("CVC는 3자리여야 합니다."),
    ).toBeInTheDocument();
  },
};
