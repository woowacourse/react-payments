import type { Meta, StoryObj } from '@storybook/react';
import AddCardForm from './AddCardForm';
import { CARD_STEPS } from '../../constants';
import { useState } from 'react';

const meta = {
  title: 'Pages/AddCard/AddCardForm',
  component: AddCardForm,
  tags: ['autodocs'],
} satisfies Meta<typeof AddCardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    initialEntries: [
      {
        state: {},
      },
    ],
  },
  args: {
    addFormState: {
      cardNumber: {
        first: '1234',
        second: '1234',
        third: '1234',
        fourth: '1234',
      },
      cardNumberErrorMessage: {
        first: '',
        second: '',
        third: '',
        fourth: '',
      },
      isCardNumberNextStep: true,
      cardBrandTypeState: 'BC카드',
      isCardBrandNextStep: true,
      cardExpirationDate: {
        month: '12',
        year: '33',
      },
      isCardExpirationDateNextStep: true,
      cardExpirationDateErrorMessage: {
        month: '',
        year: '',
      },
      cardCVCNumber: '123',
      cardCVCNumberErrorMessage: '',
      isCardCVCNumberNextStep: true,
      cardPassword: '12',
      cardPasswordErrorMessage: '',
      isCardPasswordNextStep: true,
      handleCardNumberInputChange: () => {},
      handleDropdownChange: () => {},
      handleCardExpirationDateInputChange: () => {},
      handleCardCVCNumberInputChange: () => {},
      handleCardPasswordInputChange: () => {},
      cardNumberRefs: {
        current: {
          first: null,
          second: null,
          third: null,
          fourth: null,
        },
      },
      cardExpirationDateRefs: {
        current: {
          month: null,
          year: null,
        },
      },
    },
    _testModeSteps: [],
  },
  render: (args) => {
    const [steps] = useState([
      CARD_STEPS.CARD_PASSWORD,
      CARD_STEPS.CARD_CVC_NUMBER,
      CARD_STEPS.CARD_EXPIRATION_DATE,
      CARD_STEPS.CARD_BRAND,
      CARD_STEPS.CARD_NUMBERS,
    ]);

    return <AddCardForm addFormState={args.addFormState} _testModeSteps={steps} />;
  },
};
