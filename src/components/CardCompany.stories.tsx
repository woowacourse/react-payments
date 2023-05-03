import { Meta, StoryObj } from "@storybook/react";
import CardCompanyComponent from "./CardCompany";
import { CARD_COMPANIES } from "constants/cardCompanies";

const meta = {
  component: CardCompanyComponent,
  title: "Components/CardCompany",
} satisfies Meta<typeof CardCompanyComponent>;

export default meta;

type Story = StoryObj<typeof CardCompanyComponent>;

export const CardCompany: Story = {
  args: {
    cardCompanyName: Object.keys(CARD_COMPANIES)[0],
  },

  argTypes: {
    cardCompanyName: {
      options: Object.keys(CARD_COMPANIES).map((company) => company),
      control: {
        type: "select",
      },
    },
  },
};
