import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import OutlinedButton from "./OutlinedButton";

const meta = {
  title: "Components/OutlinedButton",
  component: OutlinedButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "+ 카드 추가",
    onClick: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <OutlinedButton {...args} />
    </div>
  ),
} satisfies Meta<typeof OutlinedButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Click: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
