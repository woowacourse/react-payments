import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CardCVCInput } from './CardCVCInput';
import type { CardNumberInput } from './CardNumberInput';

const meta = {
  title: 'payments/CardCVCInput',
  component: CardCVCInput,
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: '' },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return <CardCVCInput value={value} onChange={setValue} helperTooltip />;
  },
};
