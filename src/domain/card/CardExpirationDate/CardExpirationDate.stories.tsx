import CardExpirationDate from './CardExpirationDate';
import type { Meta } from '@storybook/react';
import { ERROR_MESSAGE } from '../../../constants';
import { AddCardFormContext } from '../../../pages/AddCard/context/useCardFormContext';
import { useControlledAddCardState } from '../../../pages/AddCard/hooks/useControlledAddCardState';

const meta = {
  title: 'card/CardExpirationDate',
  component: CardExpirationDate,
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
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

export const Default = {
  name: '초기 상태의 UI',
};

export const Valid = {
  name: '유효한 카드 만료일 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardExpirationDate: {
        month: '12',
        year: '25',
      },
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardExpirationDate />
      </AddCardFormContext.Provider>
    );
  },
};

export const Error = {
  name: '유효하지 않은 카드 만료일 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardExpirationDate: {
        month: '13',
        year: '24',
      },
      cardExpirationDateErrorMessage: {
        month: ERROR_MESSAGE.validMonth,
        year: ERROR_MESSAGE.pastYear,
      },
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardExpirationDate />
      </AddCardFormContext.Provider>
    );
  },
};
