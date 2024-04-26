import type { Meta, StoryObj } from '@storybook/react';
import CardNumbersFormSection from '../components/CardNumbersFormSection';

const meta = {
  title: 'CardNumbersFormSection',
  component: CardNumbersFormSection,
} satisfies Meta<typeof CardNumbersFormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { changeCardNumber: () => {}, changeIsValid: () => {} },
};
