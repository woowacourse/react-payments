import type { Meta, StoryObj } from '@storybook/react';
import CardPasswordInput from './CardPasswordInput';

const meta: Meta<typeof CardPasswordInput> = {
  title: 'Components/CardPasswordInput',
  component: CardPasswordInput,
  argTypes: {
    cardPassword: { control: 'text' },
    onChange: { action: 'changed' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CardPasswordInput>;

export const Default: Story = {
  args: {
    cardPassword: '',
  },
};

export const ErrorState: Story = {
  args: {
    cardPassword: '1',
  },
};
