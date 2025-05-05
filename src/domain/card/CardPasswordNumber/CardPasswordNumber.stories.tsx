import CardPasswordNumber from './CardPasswordNumber';
import type { Meta } from '@storybook/react';
import { ERROR_MESSAGE } from '../../../constants';
import { useControlledAddCardState } from '../../../pages/AddCard/hooks/useControlledAddCardState';
import { AddCardFormContext } from '../../../pages/AddCard/context/useCardFormContext';

const meta = {
  title: 'card/CardPasswordNumber',
  component: CardPasswordNumber,
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
} satisfies Meta<typeof CardPasswordNumber>;

export default meta;

export const Default = {
  name: '초기 상태의 UI',
};

export const Valid = {
  name: '유효한 카드 비밀번호 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardPassword: '31',
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardPasswordNumber />
      </AddCardFormContext.Provider>
    );
  },
};

export const Error = {
  name: '유효하지 않은 카드 비밀번호 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardPassword: '3d',
      cardPasswordErrorMessage: ERROR_MESSAGE.onlyNumber,
    };
    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardPasswordNumber />
      </AddCardFormContext.Provider>
    );
  },
};
