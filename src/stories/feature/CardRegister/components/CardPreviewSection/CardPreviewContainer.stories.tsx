import type {Meta, StoryObj} from '@storybook/react-vite';

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
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['5123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};

export const UnknownBrand: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['3123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};

export const Partial: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['4123', '56', '', ''],
      expiryMonth: '1',
      expiryYear: '',
    },
  },
};
