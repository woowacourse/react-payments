import type {Meta, StoryObj} from '@storybook/react-vite';

import CardPreviewSection from './CardPreviewSection';

const meta = {
  title: 'feature/CardRegister/components/CardPreviewSection',
  component: CardPreviewSection,
  tags: ['autodocs'],
  args: {
    cardInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
    },
  },
} satisfies Meta<typeof CardPreviewSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
    },
  },
};
