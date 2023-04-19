import type { Meta, StoryObj } from '@storybook/react';

import { ExpirationDateInput } from '../../components/input/ExpirationDateInput';

const meta = {
  title: 'Example/Input',
  component: ExpirationDateInput,
  tags: ['autodocs'],
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExpirationDate: Story = {};
