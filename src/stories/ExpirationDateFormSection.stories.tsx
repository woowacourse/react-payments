import type { Meta, StoryObj } from '@storybook/react';
import ExpirationDateFormSection from '../components/ExpirationDateFormSection';

const meta = {
  title: 'ExpirationDateFormSection',
  component: ExpirationDateFormSection,
} satisfies Meta<typeof ExpirationDateFormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { changeExpiration: () => {}, changeIsValid: () => {} },
};
