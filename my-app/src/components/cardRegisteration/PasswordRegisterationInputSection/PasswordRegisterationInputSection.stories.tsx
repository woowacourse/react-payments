import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import PasswordRegisterationInputSection from "./PasswordRegisterationInputSection";

const meta = {
  title: "Components/CardRegisteration/PasswordRegisterationInputSection",
  component: PasswordRegisterationInputSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onValueHandler: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <PasswordRegisterationInputSection {...args} />
    </div>
  ),
} satisfies Meta<typeof PasswordRegisterationInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledValid: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("**");

    await userEvent.type(input, "12");

    await expect(args.onValueHandler).toHaveBeenLastCalledWith("12");
  },
};

export const ErrorNonNumeric: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("**");

    await userEvent.type(input, "ab");
    await userEvent.tab();

    await expect(canvas.getByText("숫자만 입력 가능합니다")).toBeInTheDocument();
  },
};
