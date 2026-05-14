import type { Meta, StoryObj } from '@storybook/react-vite';

import CardPreviewSection from '../../../../../feature/CardRegister/components/CardPreviewSection/CardPreviewSection';

const meta = {
  title: 'feature/CardRegister/components/CardPreviewSection',
  component: CardPreviewSection,
  tags: ['autodocs'],
  args: {
    cardPreviewInfo: {
      cardNumbers: ['', '', '', ''],
      expiryMonth: '',
      expiryYear: '',
      cardCompanyId: null,
    },
  },
} satisfies Meta<typeof CardPreviewSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    cardPreviewInfo: {
      cardNumbers: ['4123', '5678', '1234', '5678'],
      expiryMonth: '12',
      expiryYear: '30',
      cardCompanyId: 'bc',
    },
  },
};
