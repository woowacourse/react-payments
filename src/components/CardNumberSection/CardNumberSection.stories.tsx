import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import CardNumberSection from './CardNumberSection';

const meta: Meta<typeof CardNumberSection> = {
  title: 'CardNumberSection',
  component: CardNumberSection,
  args: {
    cardNumbers: { first: '', second: '', third: '', fourth: '' }
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
    cardNumbers: { first: '1334', second: '2123', third: '4123', fourth: '2111' }
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cardNumbers, setCardNumbers] = useState(initialNumbers);
    const [, setCardLogo] = useState<'visa' | 'master' | ''>('');
    return <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />;
  }
};

export const InValid: Story = {
  args: {
    cardNumbers: { first: 'aasd', second: '2123', third: '4123', fourth: '2111' }
  },
  render: ({ cardNumbers: initialNumbers }) => {
    const [cardNumbers, setCardNumbers] = useState(initialNumbers);
    const [, setCardLogo] = useState<'visa' | 'master' | ''>('');
    return <CardNumberSection cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} setCardLogo={setCardLogo} />;
  }
};
