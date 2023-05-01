import { Meta, StoryObj } from '@storybook/react';
import CardPasswordInput from './CardPasswordInput';

const meta: Meta<typeof CardPasswordInput> = {
  component: CardPasswordInput,
  title: 'CardPasswordInput',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    onChange: [() => {}, () => {}],
  },
};
