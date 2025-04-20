import type { Meta, StoryObj } from '@storybook/react';
import ExpirationDateInput from './ExpirationDateInput';

const meta: Meta<typeof ExpirationDateInput> = {
  title: 'Components/ExpirationDateInput',
  component: ExpirationDateInput,
  tags: ['autodocs'],
  argTypes: {
    values: {
      control: 'object',
      description: '값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ExpirationDateInput>;

export const Default: Story = {
  args: {
    values: ['12', '25'],
  },
};
