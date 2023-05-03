import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '../../components/common/Spinner/Spinner';

const meta = {
  title: 'Payments/Common/Spinner',
  component: Spinner,
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
