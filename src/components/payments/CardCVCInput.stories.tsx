import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');

    await userEvent.click(input);
    await expect(canvas.getByRole('tooltip')).toBeVisible();
  },
};
