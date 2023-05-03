import type { Meta, StoryObj } from '@storybook/react';

import Spinner from '../components/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'components/Spinner',
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
