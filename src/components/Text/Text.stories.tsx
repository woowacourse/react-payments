import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "../../types/componentPropsType";

const meta = {
  title: "MyComponent/MyText",
  component: Text,
  tags: ["autodocs"],
} satisfies Meta<TextProps>;

export default meta;

type Story = StoryObj<TextProps>;

export const TitleText: Story = {
  args: {
    type: "title",
    text: "결제할 카드 번호를 입력해 주세요",
  },
};

export const DescriptionText: Story = {
  args: {
    type: "description",
    text: "본인 명의의 카드만 결제 가능합니다.",
  },
};

export const LabelText: Story = {
  args: {
    type: "label",
    text: "카드 번호",
  },
};

export const ErrorText: Story = {
  args: {
    type: "error",
    text: "숫자만 입력 가능합니다.",
  },
};
