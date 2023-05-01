import { Meta, StoryObj } from '@storybook/react';
import SecurityCodeInput from './SecurityCodeInput';

const meta: Meta<typeof SecurityCodeInput> = {
  component: SecurityCodeInput,
  title: 'SecurityCodeInput',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
