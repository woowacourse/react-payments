import CardCVCNumber from './CardCVCNumber';
import type { Meta } from '@storybook/react';
import { ERROR_MESSAGE } from '../../../constants';
import { AddCardFormContext } from '../../../pages/AddCard/context/useCardFormContext';
import { useControlledAddCardState } from '../../../pages/AddCard/hooks/useControlledAddCardState';

const meta = {
  title: 'card/CardCVCNumber',
  component: CardCVCNumber,
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
} satisfies Meta<typeof CardCVCNumber>;

export default meta;

export const Default = {
  name: '초기 상태의 UI',
};

export const Valid = {
  name: '유효한 CVC 번호 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardCVCNumber: '313',
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardCVCNumber />
      </AddCardFormContext.Provider>
    );
  },
};

export const Error = {
  name: '유효하지 않은 CVC 번호 입력 후의 UI',
  render: function Render() {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardCVCNumber: '우테코',
      cardCVCNumberErrorMessage: ERROR_MESSAGE.onlyNumber,
    };

    return (
      <AddCardFormContext.Provider value={mockData}>
        <CardCVCNumber />
      </AddCardFormContext.Provider>
    );
  },
};
