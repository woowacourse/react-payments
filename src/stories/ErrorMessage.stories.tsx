import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../components/common/ErrorMessage';
import { ERROR_MESSAGE } from '../constants/errorMessage';

const meta = {
  title: 'ErrorMessage',
  component: ErrorMessage,
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: { error: { owner: ERROR_MESSAGE.notInRange(0, 30) } },
};
