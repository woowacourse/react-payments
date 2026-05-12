import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "확인",
    onClick: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <Button {...args} />
    </div>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Click: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
