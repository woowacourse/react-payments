import { Meta, StoryObj } from '@storybook/react';
import ExpirationDateInput from './ExpirationDateInput';

const meta: Meta<typeof ExpirationDateInput> = {
  component: ExpirationDateInput,
  title: 'ExpirationDateInput',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    onChange: [() => {}, () => {}],
  },
};
