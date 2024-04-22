import type { Meta, StoryObj } from "@storybook/react";
import InputFieldHeader from "./InputFieldHeader";
import { MESSAGE } from "@/constants/message";

const meta = {
  title: "InputFieldHeader",
  component: InputFieldHeader,
} satisfies Meta<typeof InputFieldHeader>;

export default meta;

type Story = StoryObj<typeof InputFieldHeader>;

export const Default: Story = {
  args: {
    title: MESSAGE.INPUT_INFO_TITLE.CARD_NUMBERS,
    subTitle: MESSAGE.INPUT_INFO_SUBTITLE.CARD_NUMBERS,
  },
};
