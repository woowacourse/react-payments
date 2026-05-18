import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import ExpiryDateRegisterationInputSection from "./ExpiryDateRegisterationInputSection";

const meta = {
  title: "Components/CardRegisteration/ExpiryDateRegisterationInputSection",
  component: ExpiryDateRegisterationInputSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onValueHandler: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <ExpiryDateRegisterationInputSection {...args} />
    </div>
  ),
} satisfies Meta<typeof ExpiryDateRegisterationInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FilledValid: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await userEvent.type(inputs[0], "08");
    await userEvent.type(inputs[1], "29");

    await expect(args.onValueHandler).toHaveBeenLastCalledWith(["08", "29"]);
  },
};

export const ErrorNonNumeric: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await userEvent.type(inputs[1], "aa");
    await userEvent.tab();

    await expect(canvas.getByText("숫자만 입력 가능합니다")).toBeInTheDocument();
  },
};

export const ErrorInvalidMonth: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole("textbox");

    await userEvent.type(inputs[0], "13");
    await userEvent.tab();

    await expect(canvas.getByText("유효한 날짜를 입력해주세요")).toBeInTheDocument();
  },
};
