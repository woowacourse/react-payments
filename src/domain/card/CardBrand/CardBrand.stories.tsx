import CardBrand from './CardBrand';
import type { Meta } from '@storybook/react';
import { useState } from 'storybook/internal/preview-api';
import { useControlledCardBrand } from './hooks/useControlledCardBrand';
import { CardBrandType } from './type';

const meta = {
  title: 'card/CardBrand',
  component: CardBrand,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const { cardBrandTypeState, handleDropdownChange } = useControlledCardBrand();

      return (
        <Story
          args={{
            cardBrandTypeState,
            handleDropdownChange,
          }}
        />
      );
    },
  ],
} satisfies Meta<typeof CardBrand>;

export default meta;

export const Default = {};

export const Valid = {
  render: function Render() {
    const { handleDropdownChange } = useControlledCardBrand();

    const [cardBrandTypeState] = useState<CardBrandType>('BC카드');

    return <CardBrand cardBrandTypeState={cardBrandTypeState} handleDropdownChange={handleDropdownChange} />;
  },
};
