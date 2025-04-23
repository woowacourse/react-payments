import type { Meta, StoryObj } from "@storybook/react";
import CardCompanySelect from "./CardCompanySelect";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardCompanySelect",
  component: CardCompanySelect,
  tags: ["autodocs"],
} satisfies Meta<typeof CardCompanySelect>;

export default meta;

type Story = StoryObj<typeof CardCompanySelect>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    cardCompanyError: false,
    validateCardCompany: () => {},
  },
};

export const WithError: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    cardCompanyError: true,
    validateCardCompany: () => {},
  },
};
