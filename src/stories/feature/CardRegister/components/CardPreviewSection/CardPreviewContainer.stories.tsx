import type { Meta, StoryObj } from '@storybook/react-vite';

import CardPreviewContainer from '../../../../../feature/CardRegister/components/CardPreviewSection/CardPreviewContainer';

const meta = {
  title: 'feature/CardRegister/components/CardPreviewContainer',
  component: CardPreviewContainer,
  tags: ['autodocs'],
  args: {
    cardPreviewInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
      cardCompanyId: null,
    },
  },
} satisfies Meta<typeof CardPreviewContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Visa: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
      cardCompanyId: 'bc',
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['5123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
      cardCompanyId: 'shinhan',
    },
  },
};

export const Amex: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['3434', '312323', '32134'],
      expiryMonth: '12',
      expiryYear: '30',
      cardCompanyId: 'hyundai',
    },
  },
};

export const UnknownBrand: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['3123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
      cardCompanyId: null,
    },
  },
};

export const Partial: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['4123', '56', '', ''],
      expiryMonth: '1',
      expiryYear: '',
      cardCompanyId: 'woori',
    },
  },
};
