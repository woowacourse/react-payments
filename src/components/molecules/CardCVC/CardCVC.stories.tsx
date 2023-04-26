import type { Meta, StoryObj } from '@storybook/react';

import CardCVC from '.';

const meta: Meta<typeof CardCVC> = {
  title: 'molecules/CardCVC',
  component: CardCVC,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
