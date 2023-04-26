import type { Meta, StoryObj } from "@storybook/react";

import { CARD_COMPANIES_ENGLISH } from "../type/CardCompany";
import CardCompanyButton from "../component/CardInputPage/CardCompany/CardCompanyButton";

type Story = StoryObj<typeof CardCompanyButton>;

const meta: Meta<typeof CardCompanyButton>= {
  title: "Card Company Button",
  component: CardCompanyButton,
  argTypes: {
    companyName: {
      options: CARD_COMPANIES_ENGLISH,
      control: { type: 'inline-radio' },
    },
    onClick: {
      action: 'Clicked!!',
    },
  },
};

export default meta;

export const Icons: Story = { args: { companyName: 'kakao' } };
