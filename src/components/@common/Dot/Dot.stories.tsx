import { Meta, StoryObj } from '@storybook/react';
import Dot from './Dot';

const meta: Meta<typeof Dot> = {
  title: 'Components/Dot',
  component: Dot,
  argTypes: {
    value: { control: 'text' },
    css: { table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Dot>;

export const Default: Story = {
  args: {
    value: '1234',
  },
};

export const Numeric: Story = {
  args: {
    value: 5678,
  },
};
