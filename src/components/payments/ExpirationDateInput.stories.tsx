import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ExpirationDateInput } from './ExpirationDateInput';

const meta = {
  title: 'payments/ExpirationDateInput',
  component: ExpirationDateInput,
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: ['', ''] },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <ExpirationDateInput value={value} onChange={setValue} />;
  },
};
