import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import PasswordInputSection from "./PasswordInputSection";

const meta = {
  title: "Components/PasswordInputSection",
  component: PasswordInputSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onValueHandler: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <PasswordInputSection {...args} />
    </div>
  ),
} satisfies Meta<typeof PasswordInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledValid: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "12");

    await expect(args.onValueHandler).toHaveBeenLastCalledWith("12");
  },
};

export const ErrorNonNumeric: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "ab");
    await userEvent.tab();

    await expect(canvas.getByText("숫자만 입력 가능합니다")).toBeInTheDocument();
  },
};
