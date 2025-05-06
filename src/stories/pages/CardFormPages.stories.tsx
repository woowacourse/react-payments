import CardFormPages from '@/pages/CardFormPages';
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import styles from '../../css/main.module.css';

const meta = {
  title: 'CardFormPages',
  component: CardFormPages,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className={styles.main}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof CardFormPages>;

export default meta;

type Story = StoryObj<typeof meta>;

const cardFormPagesProp = {
  cardNumbersForm: {
    cardNumbers: {
      firstNumber: '',
      secondNumber: '',
      thirdNumber: '',
      fourthNumber: '',
    },
    setCardNumbers: () => {},
    handleCardNumbersBlur: () => {},
    isError: { cardNumbers: false },
    errorMessage: '',
  },
  cardCVCNumberForm: {
    cardCVCNumber: '',
    setCardCVCNumber: () => {},
    handleCardCVCBlur: () => {},
    isError: { cvcNumber: false },
    errorMessage: '',
  },
  cardCompanyForm: {
    cardCompany: '',
    setCardCompany: () => {},
    resetCardCompany: () => {},
  },
  cardExpirationDateForm: {
    cardExpirationDate: {
      month: '',
      year: '',
    },
    setCardExpirationDate: () => {},
    handleExpirationDateBlur: () => {},
    isError: { expirationDate: false },
    errorMessage: '',
  },
  cardPasswordForm: {
    cardPassword: '',
    setCardPassword: () => {},
    handleCardPasswordBlur: () => {},
    isError: { password: false },
    errorMessage: '',
  },
  canSubmit: () => true,
};
export const Default: Story = {
  args: { ...cardFormPagesProp },
};
