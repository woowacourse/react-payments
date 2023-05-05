import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '../../components/Loading';

const meta = {
  title: 'Example/LoadingAnimation',
  component: Loading,
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WalkingDog: Story = {
  render: () => <Loading />,
};
