import type { Meta, StoryObj } from '@storybook/react';
import CardIssuerSelection from '../../components/CardAddForm/CardIssuer/CardIssuerSelection/CardIssuerSelection';

const meta = {
  title: 'Payments/Cards/CardIssuerSelection',
  component: CardIssuerSelection,
} satisfies Meta<typeof CardIssuerSelection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
