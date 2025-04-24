import type { Meta, StoryObj } from '@storybook/react';
import RegisterCardPage from '../../routes/RegisterCardPage';

const meta = {
  title: 'Routes/RegisterCardPage',
  component: RegisterCardPage,
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterCardPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
