import { Meta, StoryObj } from '@storybook/react';
import CardSpinner from './CardSpinner';

const meta: Meta<typeof CardSpinner> = {
  component: CardSpinner,
  title: 'CardSpinner',
};

export default meta;
type Story = StoryObj<typeof CardSpinner>;

export const Default: Story = {
  args: {},
};
