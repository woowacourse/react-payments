import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

const meta = {
  title: "MyComponent/MyText",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const TitleText: Story = {
  args: {
    text: "결제할 카드 번호를 입력해 주세요",
    size: "18px",
    color: "#000",
    weight: "700",
    lineHeight: "normal",
  },
};

export const DescriptionText: Story = {
  args: {
    text: "본인 명의의 카드만 결제 가능합니다.",
    size: "9.5px",
    color: "#8b95a1",
    weight: "400",
    lineHeight: "normal",
  },
};

export const LabelText: Story = {
  args: {
    text: "카드 번호",
    size: "12px",
    color: "#0a0d13",
    weight: "500",
    lineHeight: "15px",
  },
};

export const ErrorText: Story = {
  args: {
    text: "숫자만 입력 가능합니다.",
    size: "9.5px",
    color: "#ff3d3d",
    weight: "400",
    lineHeight: "normal",
  },
};
