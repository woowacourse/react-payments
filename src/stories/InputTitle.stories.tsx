import type { Meta, StoryObj } from '@storybook/react';
import InputTitle from '../components/InputTitle';

const meta = {
  title: 'InputTitle',
  component: InputTitle,
} satisfies Meta<typeof InputTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
