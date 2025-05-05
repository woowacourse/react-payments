import type { Meta } from '@storybook/react';
import CardNumber from './CardNumber';
import { useControlledAddCardState } from '../../../pages/AddCard/hooks/useControlledAddCardState';
import { AddCardFormContext } from '../../../pages/AddCard/context/useCardFormContext';

const meta = {
  title: 'card/CardNumber',
  component: CardNumber,
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
} satisfies Meta<typeof CardNumber>;

export default meta;

export const Default = {
  name: '초기 상태의 UI',
};

export const Valid = {
  name: '유효한 카드 번호 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardNumber: {
        first: '1234',
        second: '4567',
        third: '8910',
        fourth: '1112',
      },
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardNumber />
      </AddCardFormContext.Provider>
    );
  },
};

export const Error = {
  name: '유효하지 않은 카드 번호 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardNumber: {
        first: 'd455',
        second: 's4565',
        third: '1234',
        fourth: '5678',
      },
      cardNumberErrorMessage: {
        first: '숫자만 입력 가능합니다.',
        second: '숫자만 입력 가능합니다.',
        third: '',
        fourth: '',
      },
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardNumber />
      </AddCardFormContext.Provider>
    );
  },
  parameters: {
    controls: {
      expanded: true,
    },
  },
};
