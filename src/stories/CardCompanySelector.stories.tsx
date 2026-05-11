import type { Meta, StoryObj } from "@storybook/react-vite";

import CardCompanySelector from "@components/CardCompanySelector/CardCompanySelector";
import { CARD_COMPANIES } from "@/constants/cardCompanies";

const meta = {
  title: "CardCompanySelector",
  component: CardCompanySelector,
} satisfies Meta<typeof CardCompanySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardCompany: null,
    onSelect: () => {},
    onNextStep: () => {},
  },
};

export const Selected: Story = {
  args: {
    cardCompany: CARD_COMPANIES[0],
    onSelect: () => {},
    onNextStep: () => {},
  },
};
