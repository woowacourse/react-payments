import CardBrand from './CardBrand';
import type { Meta } from '@storybook/react';
import { AddCardFormContext } from '../../../pages/AddCard/context/useCardFormContext';
import { useControlledAddCardState } from '../../../pages/AddCard/hooks/useControlledAddCardState';
import { AddCardFormProps } from '../../../pages/AddCard/types';

const meta = {
  title: 'card/CardBrand',
  component: CardBrand,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const addFormState = useControlledAddCardState();
      return (
        <AddCardFormContext.Provider value={addFormState}>
          <Story />
        </AddCardFormContext.Provider>
      );
    },
  ],
} satisfies Meta<typeof CardBrand>;

export default meta;

export const Default = {
  name: '초기 상태의 UI',
};

export const valid = {
  name: '국민카드를 선택한 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardBrandTypeState: '국민카드',
    };

    return (
      <AddCardFormContext.Provider value={mockData as AddCardFormProps}>
        <CardBrand />
      </AddCardFormContext.Provider>
    );
  },
};
