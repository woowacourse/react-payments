import type {Meta, StoryObj} from '@storybook/react-vite';

import CardPreviewContainer from './CardPreviewContainer';

const meta = {
  title: 'feature/CardRegister/components/CardPreviewContainer',
  component: CardPreviewContainer,
  tags: ['autodocs'],
  args: {
    cardInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
    },
  },
} satisfies Meta<typeof CardPreviewContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Visa: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['5123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};

export const UnknownBrand: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['3123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};

export const Partial: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['4123', '56', '', ''],
      expiryMonth: '1',
      expiryYear: '',
    },
  },
};
