import { Meta, StoryObj } from '@storybook/react';
import CardView from '../components/CardView';

export default {
  title: 'Components/CardView',
  component: CardView,
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ padding: '3rem' }}>{Story()}</div>],
} as Meta;

const Template: StoryObj<typeof CardView> = {
  args: {
    cardInfo: {
      cardBrand: {
        cardBrand: { value: 'Visa', errorMessage: '', isError: false },
      },
      cardNumbers: {
        cardNumber1: { value: '1234', errorMessage: '', isError: false },
        cardNumber2: { value: '5678', errorMessage: '', isError: false },
        cardNumber3: { value: '9012', errorMessage: '', isError: false },
        cardNumber4: { value: '3456', errorMessage: '', isError: false },
      },
      expirationDate: {
        month: { value: '01', errorMessage: '', isError: false },
        year: { value: '25', errorMessage: '', isError: false },
      },
      userName: {
        userName: { value: 'JAE MIN', errorMessage: '', isError: false },
      },
      password: { password: { value: '12', errorMessage: '', isError: false } },
      CVC: { CVC: { value: '123', errorMessage: '', isError: false } },
    },
  },
};

export const Default = Template;

export const BackCard = {
  args: {
    cardInfo: {
      cardBrand: {
        cardBrand: { value: 'Visa', errorMessage: '', isError: false },
      },
      cardNumbers: {
        cardNumber1: { value: '1234', errorMessage: '', isError: false },
        cardNumber2: { value: '5678', errorMessage: '', isError: false },
        cardNumber3: { value: '9012', errorMessage: '', isError: false },
        cardNumber4: { value: '3456', errorMessage: '', isError: false },
      },
      expirationDate: {
        month: { value: '01', errorMessage: '', isError: false },
        year: { value: '25', errorMessage: '', isError: false },
      },
      userName: {
        userName: { value: 'JAM MIN', errorMessage: '', isError: false },
      },
      password: { password: { value: '12', errorMessage: '', isError: false } },
      CVC: { CVC: { value: '12', errorMessage: '', isError: false } },
    },
  },
};
