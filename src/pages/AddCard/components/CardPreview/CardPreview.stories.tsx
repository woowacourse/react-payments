import { AddCardFormContext } from '../../context/useCardFormContext';
import { useControlledAddCardState } from '../../hooks/useControlledAddCardState';
import CardPreview from './CardPreview';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pages/AddCard/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  parameters: {
    initialEntries: [
      {
        state: {},
      },
    ],
    docs: {
      description: {
        component: '카드 미리보기 컴포넌트입니다. 카드 번호, 카드 브랜드, 카드 유효기간을 보여줍니다.',
      },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '모든 정보가 다 입력된 상태 UI (ver 마스터)',
  render: () => {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardExpirationDate: {
        month: '12',
        year: '25',
      },
      cardNumber: {
        first: '5134',
        second: '2312',
        third: '1232',
        fourth: '2353',
      },
      CardBrandType: 'BC카드',
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardPreview />
      </AddCardFormContext.Provider>
    );
  },
};

export const VisaCard: Story = {
  name: '모든 정보가 다 입력된 상태 UI (Ver 비자)',
  render: () => {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardExpirationDate: {
        month: '12',
        year: '25',
      },
      cardNumber: {
        first: '4134',
        second: '2312',
        third: '1232',
        fourth: '2353',
      },
      CardBrandType: 'BC카드',
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardPreview />
      </AddCardFormContext.Provider>
    );
  },
};
