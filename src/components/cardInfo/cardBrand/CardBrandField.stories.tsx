import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardBrandField from './CardBrandField';

const meta: Meta<typeof CardBrandField> = {
  title: 'Components/CardBrandField',
  component: CardBrandField,
};

export default meta;

type Story = StoryObj<typeof CardBrandField>;

export const Default: Story = {
  render: () => {
    const [brand, setBrand] = useState('');
    return <CardBrandField value={brand} onChange={setBrand} />;
  },
};

export const Selected: Story = {
  render: () => {
    const [brand, setBrand] = useState('신한카드');
    return <CardBrandField value={brand} onChange={setBrand} />;
  },
};
