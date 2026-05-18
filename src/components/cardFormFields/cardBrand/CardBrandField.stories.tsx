import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import CardBrandField from './CardBrandField';
import CardPreview from '../../cardPreview/CardPreview';
import { useCardForm } from '../../useCardForm';

const meta: Meta<typeof CardBrandField> = {
  title: 'Components/CardBrandField',
  component: CardBrandField,
};

export default meta;

type Story = StoryObj<typeof CardBrandField>;

export const Default: Story = {
  render: () => {
    const [brand, setBrand] = useState('');
    return <CardBrandField field={{ value: brand, set: setBrand }} />;
  },
};

export const Selected: Story = {
  render: () => {
    const [brand, setBrand] = useState('SHINHAN');
    return <CardBrandField field={{ value: brand, set: setBrand }} />;
  },
};

export const ColorTest: Story = {
  render: () => {
    const cardForm = useCardForm();
    return (
      <>
        <CardPreview cardForm={cardForm} />
        <CardBrandField field={cardForm.cardBrand} />
      </>
    );
  },
};
