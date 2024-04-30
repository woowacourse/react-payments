import type { Meta, StoryObj } from '@storybook/react';
import PasswordFormSection from '../components/PasswordFormSection';

const meta = {
  title: 'PasswordFormSection',
  component: PasswordFormSection,
} satisfies Meta<typeof PasswordFormSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { changePassword: () => {}, changeIsValid: () => {} },
};
