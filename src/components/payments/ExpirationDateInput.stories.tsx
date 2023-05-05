import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const inputs = canvas.getAllByRole('textbox');

    await userEvent.type(inputs[0], '1225');
    inputs.forEach((input, index) =>
      expect(input).toHaveValue('1225'.slice(index * 2, (index + 1) * 2)),
    );
  },
};
