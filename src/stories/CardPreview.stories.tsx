import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../component/common/CardPreview";
import { CARD_COMPANIES_ENGLISH, cardCompanyEnglishToKorean } from "../type/CardCompany";
import { getDefaultCreditCard } from "../type/CreditCard";

type Story = StoryObj<typeof CardPreview>;

const meta: Meta = {
  title: "Card Preview",
  component: CardPreview,
  argTypes: {
    company: {
      name: '카드사',
      options: Object.fromEntries(
        CARD_COMPANIES_ENGLISH.map((enName) => [cardCompanyEnglishToKorean(enName), enName])
      ),
      control: { type: 'inline-radio' },
    },
    card: {
      table: { disable: true },
    },
  },
};

export default meta;

export const EmptyCard: Story = {
  render: (args) => {
    const newArg = {
      card: {
        ...getDefaultCreditCard(),
        ...args,
      },
    };
    return (
      <CardPreview {...newArg}/>
    );
  },
};

export const FilledCard: Story = {
  render: (args) => {
    const newArg = {
      card: {
        ...getDefaultCreditCard(),
        ...args,
        number: ['1234', '5678', '9012', '3456'],
        name: 'CHAMSAE',
        date: '02/25',
      },
    };
    return (
      <CardPreview {...newArg}/>
    );
  },
};
