import type { Meta, StoryObj } from '@storybook/react';

import CardList from '.';

const meta: Meta<typeof CardList> = {
  title: 'organisms/CardList',
  component: CardList,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
