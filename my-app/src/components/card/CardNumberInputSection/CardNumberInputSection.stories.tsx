import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import CardNumberInputSection from "./CardNumberInputSection";

const meta = {
  title: "Components/Card/CardNumberInputSection",
  component: CardNumberInputSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onValueHandler: fn(),
    maxLength: 16,
    isSupportedNetwork: false,
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <CardNumberInputSection {...args} />
    </div>
  ),
} satisfies Meta<typeof CardNumberInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledValid: Story = {
  args: {
    isSupportedNetwork: true,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await userEvent.type(inputs[0], "4123");
    await userEvent.type(inputs[1], "4567");
    await userEvent.type(inputs[2], "8901");
    await userEvent.type(inputs[3], "2345");

    await expect(args.onValueHandler).toHaveBeenLastCalledWith(["4123", "4567", "8901", "2345"]);
  },
};

export const ErrorNonNumeric: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await userEvent.type(inputs[0], "abcd");
    await userEvent.tab();

    await expect(canvas.getByText("숫자만 입력 가능합니다")).toBeInTheDocument();
  },
};

export const ErrorUnsupportedBrand: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await userEvent.type(inputs[0], "1234");
    await userEvent.tab();

    await expect(canvas.getByText("이 카드 브랜드는 지원하지 않습니다.")).toBeInTheDocument();
  },
};
