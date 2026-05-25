import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";

import CardCompanySelector from "@/components/CardRegister/CardCompanySelector/CardCompanySelector";
import { CARD_COMPANIES } from "@/constants/cardCompanies";

const meta = {
  title: "CardRegister/CardCompanySelector",
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

export const Opened: Story = {
  args: {
    cardCompany: null,
    onSelect: () => {},
    onNextStep: () => {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
  },
};
