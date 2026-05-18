import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import Select from "./Select";

const OPTIONS = ["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드"];

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    value: "",
    options: OPTIONS,
    placeholder: "카드사를 선택해 주세요",
    onChange: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Select {...args} />
    </div>
  ),
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "신한카드",
  },
};

export const Opened: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByRole("list")).toBeInTheDocument();
  },
};

export const SelectOption: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await userEvent.click(canvas.getByText("현대카드"));
    await expect(args.onChange).toHaveBeenCalledWith("현대카드");
  },
};
