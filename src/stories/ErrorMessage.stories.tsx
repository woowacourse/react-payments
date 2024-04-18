import type { Meta, StoryObj } from '@storybook/react';
import ErrorMessage from '../components/ErrorMessage';
import { ERROR_MESSAGE } from '../constants/errorMessage';

const meta = {
  title: 'ErrorMessage',
  component: ErrorMessage,
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    value: ERROR_MESSAGE.notANumber,
  },
};
