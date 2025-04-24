import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "MyComponent/MyButton",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    text: "확인",
  },

  render: (args: any) => {
    return <Button text={args.text} />;
  },
};

export const Rounded: Story = {
  args: {
    text: "확인",
    rounded: true,
  },

  render: (args: any) => {
    return <Button text={args.text} rounded={args.rounded} />;
  },
};

export const Disabled: Story = {
  args: {
    text: "확인",
    disabled: true,
  },

  render: (args: any) => {
    return <Button text={args.text} disabled={args.disabled} />;
  },
};
