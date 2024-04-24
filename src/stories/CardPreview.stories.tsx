import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'HONG GILDONG',
    cvc: '123',
    cardCompany: null,
    showCVC: false,
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'HONG GILDONG',
    cvc: '123',
    cardCompany: null,
    showCVC: false,
  },
};

export const Mastercard: Story = {
  args: {
    cardNumber: ['5234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'HONG GILDONG',
    cvc: '123',
    cardCompany: null,
    showCVC: false,
  },
};

export const LongName: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'KIM AREUMDAUNIDDANGEGUMSUGANGSANE',
    cvc: '123',
    cardCompany: null,
    showCVC: false,
  },
};

export const CardCompany: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'KIM AREUMDAUNIDDANGEGUMSUGANGSANE',
    cvc: '123',
    cardCompany: 'shinhan',
    showCVC: false,
  },
};

export const ShowCVC: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    expirationMonth: '04',
    expirationYear: '24',
    name: 'KIM AREUMDAUNIDDANGEGUMSUGANGSANE',
    cvc: '123',
    cardCompany: null,
    showCVC: true,
  },
};
