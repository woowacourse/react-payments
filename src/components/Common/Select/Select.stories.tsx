import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { CARD_COMPANY_INFO } from "../../../constants/constants";

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const defaultArgs = {
  options: CARD_COMPANY_INFO,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    placeholder: "카드사를 선택해주세요",
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    isError: true,
  },
};
