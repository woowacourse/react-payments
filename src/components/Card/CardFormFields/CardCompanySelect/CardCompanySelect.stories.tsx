import type { Meta, StoryObj } from "@storybook/react";
import CardCompanySelect from "./CardCompanySelect";
import { withCustomCardProvider } from "../../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../../.storybook/utils/withCustomCardValidationProvider";

const meta = {
  title: "CardCompanySelect",
  component: CardCompanySelect,
  tags: ["autodocs"],
} satisfies Meta<typeof CardCompanySelect>;

export default meta;

type Story = StoryObj<typeof CardCompanySelect>;

export const Default: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
};

export const WithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      cardCompanyError: {
        errorMessage: null,
        hasError: true,
      },
    }),
  ],
};
