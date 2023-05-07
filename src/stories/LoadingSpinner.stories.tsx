import type { Meta, StoryObj } from '@storybook/react';

import LoadingSpinner from '../component/common/LoadingSpinner/LoadingSpinner';

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Loading Spinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    diameter: { control: 'text'},
    borderWidth: { control: 'text'},
    color: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    diameter: '77px',
    borderWidth: '7px',
    color: 'hotpink',
  },
};
