import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import CvcInputSection from "./CvcInputSection";

const meta = {
  title: "CardForm/CvcInputSection",
  component: CvcInputSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onChange: fn(),
    inputValue: "",
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <CvcInputSection {...args} />
    </div>
  ),
} satisfies Meta<typeof CvcInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledValid: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");

    await userEvent.type(input, "123");

    await expect(args.onChange).toHaveBeenLastCalledWith("123");
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

export const ServerError: Story = {
  args: {
    serverError: "CVC 번호가 올바르지 않습니다.",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("CVC 번호가 올바르지 않습니다.")).toBeInTheDocument();
  },
};
