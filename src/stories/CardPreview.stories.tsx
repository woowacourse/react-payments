import type { Meta, StoryObj } from "@storybook/react";

import CardPreview from "../component/common/CardPreview";
import { CARD_COMPANIES_ENGLISH } from "../type/CardCompany";

type Story = StoryObj<typeof CardPreview>;

const meta: Meta = {
  title: "CardPreview",
  component: CardPreview,
  argTypes: {
    // card: {
    // },
    
    company: {
      options: CARD_COMPANIES_ENGLISH,
      control: { type: 'inline-radio' },
    },
  },
};

export default meta;

export const CreditCard: Story = {
  args: { 
    card: { number: ['1234', '1234', '1234', '1234'], name: '', date: '12/25' , securityCode: 0, password: 0},
  },
};

// export const emptyCard = (args: any) => <CardPreview {...args}></CardPreview>;
// emptyCard.args = {
//   card: {},
// };

// export const filledCard = (args: any) => <CardPreview {...args}></CardPreview>;
// filledCard.args = {
//   card: {
//     company
//     name: "qwer",
//     number: [1234, 5678, 9012, 3456],
//     date: "12/25",
//   },
// };
