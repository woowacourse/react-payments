import type { Meta, StoryObj } from '@storybook/react';

import CardForm from '.';

const meta: Meta<typeof CardForm> = {
  title: 'organisms/CardForm',
  component: CardForm,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
