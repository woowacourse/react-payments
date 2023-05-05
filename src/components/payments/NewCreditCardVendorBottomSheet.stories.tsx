import type { Meta, StoryObj } from '@storybook/react';
import { NewCreditCardVendorBottomSheet } from './NewCreditCardVendorBottomSheet';

const meta = {
  title: 'payments/NewCreditCardVendorBottomSheet',
  component: NewCreditCardVendorBottomSheet,
} satisfies Meta<typeof NewCreditCardVendorBottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
  },
};
