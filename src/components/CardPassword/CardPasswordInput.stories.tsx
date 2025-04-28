import type { Meta, StoryObj } from '@storybook/react';
import CardPasswordInput from './CardPasswordInput';

const meta: Meta<typeof CardPasswordInput> = {
  title: 'Components/CardPasswordInput',
  component: CardPasswordInput,
  argTypes: {
    cardPassword: { control: 'text' },
    hasError: { control: 'boolean' },
    onChange: { action: 'changed' },
    getCardPasswordErrorMessage: { table: { disable: true } },
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
    hasError: false,
  },
};

export const Error: Story = {
  args: {
    cardPassword: '1',
    hasError: true,
  },
};
