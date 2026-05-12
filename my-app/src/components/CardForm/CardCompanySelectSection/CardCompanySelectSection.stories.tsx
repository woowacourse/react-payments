import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import CardCompanySelectSection from "./CardCompanySelectSection";

const meta = {
  title: "CardForm/CardCompanySelectSection",
  component: CardCompanySelectSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onValueHandler: fn(),
    inputValue: "",
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <CardCompanySelectSection {...args} />
    </div>
  ),
} satisfies Meta<typeof CardCompanySelectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Opened: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByRole("list")).toBeInTheDocument();
  },
};

export const Selected: Story = {
  args: {
    inputValue: "신한카드",
  },
};

export const SelectedAndOpen: Story = {
  args: {
    inputValue: "신한카드",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(canvas.getByRole("list")).toBeInTheDocument();
  },
};

export const SelectCompany: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await userEvent.click(canvas.getByText("신한카드"));
    await expect(args.onValueHandler).toHaveBeenLastCalledWith("신한카드");
  },
};
