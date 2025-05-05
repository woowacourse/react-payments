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
  render: () => {
    return <Button>확인</Button>;
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
  },

  render: (args: any) => {
    return <Button rounded={args.rounded}>모서리가 둥근 버튼</Button>;
  },
};
