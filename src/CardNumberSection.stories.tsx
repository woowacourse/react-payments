import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CardNumberSection from '../components/CardNumberSection/CardNumberSection';

const meta: Meta<typeof CardNumberSection> = {
  title: 'CardNumberSection',
  component: CardNumberSection,
  args: {
    cardNumbers: ['', '', '', '']
  }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ cardNumbers: initialNumbers }) => {
    const [cardNumbers, setCardNumbers] = useState(initialNumbers);
    const [, setCardLogo] = useState<'visa' | 'master' | ''>('');
    return <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />;
  }
};

export const Valid: Story = {
  args: {
    cardNumbers: ['1412', '4123', '3223', '1233']
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cardNumbers, setCardNumbers] = useState(initialNumbers);
    const [, setCardLogo] = useState<'visa' | 'master' | ''>('');
    return <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />;
  }
};

export const InValid: Story = {
  args: {
    cardNumbers: ['aasd', '4123', '3223', '1233']
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cardNumbers, setCardNumbers] = useState(initialNumbers);
    const [, setCardLogo] = useState<'visa' | 'master' | ''>('');
    return <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />;
  }
};
