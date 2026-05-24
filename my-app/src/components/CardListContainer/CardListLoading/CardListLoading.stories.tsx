import type { Meta, StoryObj } from '@storybook/react-vite';
import CardListLoading from './CardListLoading';

const meta: Meta<typeof CardListLoading> = {
  title: 'Components/CardListContainer/CardListLoading',
  component: CardListLoading,
};

export default meta;
type Story = StoryObj<typeof CardListLoading>;

export const Default: Story = {};
