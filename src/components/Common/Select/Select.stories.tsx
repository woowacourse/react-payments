import type { Meta, StoryObj } from "@storybook/react";
import { CARD_COMPANY_INFO, PLACEHOLDER } from "../../../constants/card";
import Select from "./Select";

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
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...defaultArgs,
    placeholder: PLACEHOLDER.cardCompany,
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    isError: true,
  },
};
