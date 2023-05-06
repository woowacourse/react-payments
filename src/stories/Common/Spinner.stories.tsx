import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '../../components/common/Spinner/Loading';

const meta = {
  title: 'Payments/Common/Spinner',
  component: Loading,
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WalkingDog: Story = {};
