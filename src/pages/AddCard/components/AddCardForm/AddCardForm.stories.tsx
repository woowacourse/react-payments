import AddCardForm from './AddCardForm';
import type { Meta, StoryObj } from '@storybook/react';
import { CARD_STEPS } from '../../constants';
import { useState } from 'react';
import { AddCardFormContext } from '../../context/useCardFormContext';
import { useControlledAddCardState } from '../../hooks/useControlledAddCardState';

const meta = {
  title: 'Pages/AddCard/AddCardForm',
  component: AddCardForm,
  tags: ['autodocs'],
  parameters: {
    initialEntries: [
      {
        state: {},
      },
    ],
    docs: {
      description: {
        component: '카드 정보 입력 폼 컴포넌트입니다. 각 카드 정보 입력 단계에 따라 다른 UI를 보여줍니다.',
      },
    },
  },
} satisfies Meta<typeof AddCardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: '마지막 단계까지 다 생성된 UI',
  render: () => {
    const addFormState = useControlledAddCardState();
    const mockData = {
      ...addFormState,
      cardNumber: {
        first: '1234',
        second: '1234',
        third: '1234',
        fourth: '1234',
      },
      cardBrandTypeState: 'BC카드',
      isCardNumberNextStep: true,
      cardExpirationDate: {
        month: '12',
        year: '33',
      },
      isCardExpirationDateNextStep: true,
      cardCVCNumber: '123',
      isCardCVCNumberNextStep: true,
      cardPassword: '12',
      isCardPasswordNextStep: true,
    };
    const [steps] = useState([
      CARD_STEPS.CARD_PASSWORD,
      CARD_STEPS.CARD_CVC_NUMBER,
      CARD_STEPS.CARD_EXPIRATION_DATE,
      CARD_STEPS.CARD_BRAND,
      CARD_STEPS.CARD_NUMBERS,
    ]);

    return (
      <AddCardFormContext.Provider value={mockData as any}>
        <AddCardForm _testModeSteps={steps} />
      </AddCardFormContext.Provider>
    );
  },
};
