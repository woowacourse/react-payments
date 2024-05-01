import type { Meta, StoryObj } from "@storybook/react";
import Button from "../components/common/Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    onClickHandler: () => {},
    children: "확인",
    buttonType: "basic",
  },
};

export const FullScreen: Story = {
  args: {
    onClickHandler: () => {},
    children: "확인",
    buttonType: "fullScreen",
  },
};
