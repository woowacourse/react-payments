import type { Meta, StoryObj } from '@storybook/react';
import CardListLoading from './CardListLoading';

const meta = {
  title: 'Pages/CardListPage/CardListLoading',
  component: CardListLoading,
} satisfies Meta<typeof CardListLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
