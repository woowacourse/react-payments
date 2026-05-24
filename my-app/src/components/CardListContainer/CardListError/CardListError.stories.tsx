import type { Meta, StoryObj } from '@storybook/react-vite';
import CardListError from './CardListError';

const meta: Meta<typeof CardListError> = {
  title: 'Components/CardListContainer/CardListError',
  component: CardListError,
};

export default meta;
type Story = StoryObj<typeof CardListError>;

export const Default: Story = {};
