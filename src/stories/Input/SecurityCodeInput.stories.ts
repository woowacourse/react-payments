import type { Meta, StoryObj } from '@storybook/react';

import { SecurityCodeInput } from '../../components/input/SecurityCodeInput';

const meta = {
  title: 'Example/Input',
  component: SecurityCodeInput,
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecurityCode: Story = {};
