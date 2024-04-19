import type { Meta, StoryObj } from "@storybook/react";
import InputFieldHeader from "./InputFieldHeader";
import { INPUT_INFO_SUBTITLE, INPUT_INFO_TITLE } from "@/constants/condition";

const meta = {
  title: "InputFieldHeader",
  component: InputFieldHeader,
} satisfies Meta<typeof InputFieldHeader>;

export default meta;

type Story = StoryObj<typeof InputFieldHeader>;

export const Default: Story = {
  args: {
    title: INPUT_INFO_TITLE.CARD_NUMBERS,
    subTitle: INPUT_INFO_SUBTITLE.CARD_NUMBERS,
  },
};
