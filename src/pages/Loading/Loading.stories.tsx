import type { Meta, StoryObj } from '@storybook/react';

import Loading from '.';

const meta: Meta<typeof Loading> = {
  title: 'pages/Loading',
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
