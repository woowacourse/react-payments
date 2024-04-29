import type { Meta, StoryObj } from "@storybook/react";
import BasicButton from "./BasicButton";
import { theme } from "@/style/theme";

const meta = {
  title: "BasicButton",
  component: BasicButton,
} satisfies Meta<typeof BasicButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    borderType: "round",
    position: "basic",
    height: 52,
    width: 200,
    disabled: false,
    backgroundColor: theme.COLOR["grey-3"],
    onClick: () => {},
    children: "확인",
  },
};

export const BottomButton: Story = {
  args: {
    borderType: "square",
    position: "bottom",
    height: 52,
    width: 100,
    disabled: false,
    backgroundColor: theme.COLOR["grey-3"],
    onClick: () => {},
    children: "확인",
  },
};
