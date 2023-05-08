import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '.';

const meta: Meta<typeof Spinner> = {
  title: 'atomics/Spinner',
  component: Spinner,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
