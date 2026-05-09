import type {Meta, StoryObj} from '@storybook/react-vite';

import CardPreviewSection from './CardPreviewSection';

const meta = {
  title: 'feature/CardRegister/components/CardPreviewSection',
  component: CardPreviewSection,
  tags: ['autodocs'],
  args: {
    cardNumbers: ['', '', '', ''],
    brand: null,
    expiryDate: ['', ''],
    selectedCompany: null,
  },
} satisfies Meta<typeof CardPreviewSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    cardNumbers: ['4123', '5678', '1234', '5678'],
    expiryDate: ['12', '30'],
  },
};
