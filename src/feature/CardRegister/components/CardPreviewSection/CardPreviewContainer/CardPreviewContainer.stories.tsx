import type {Meta, StoryObj} from '@storybook/react-vite';

import CardPreviewContainer from './CardPreviewContainer';

const meta = {
  title: 'feature/CardRegister/components/CardPreviewContainer',
  component: CardPreviewContainer,
  tags: ['autodocs'],
  args: {
    cardNumbers: ['', '', '', ''],
    brand: null,
    expiryDate: ['', ''],
    selectedCompany: null,
  },
} satisfies Meta<typeof CardPreviewContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Visa: Story = {
  args: {
    cardNumbers: ['4123', '5678', '1234', '5678'],
    expiryDate: ['12', '30'],
  },
};

export const MasterCard: Story = {
  args: {
    cardNumbers: ['5123', '5678', '1234', '5678'],
    expiryDate: ['12', '30'],
  },
};

export const Amex: Story = {
  args: {
    cardNumbers: ['3412', '345678', '90123'],
    expiryDate: ['12', '30'],
  },
};

export const Diners: Story = {
  args: {
    cardNumbers: ['3612', '345678', '9012'],
    expiryDate: ['12', '30'],
  },
};

export const UnionPay: Story = {
  args: {
    cardNumbers: ['6221', '2612', '3456', '7890'],
    expiryDate: ['12', '30'],
  },
};

export const UnknownBrand: Story = {
  args: {
    cardNumbers: ['3123', '5678', '1234', '5678'],
    expiryDate: ['12', '30'],
  },
};

export const Partial: Story = {
  args: {
    cardNumbers: ['4123', '56', '', ''],
    expiryDate: ['1', ''],
  },
};
