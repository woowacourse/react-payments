import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicInput: Story = {
  args: {
    designType: 'basic',
    width: 200,
  },
};

export const UnderlineInput: Story = {
  args: {
    designType: 'underline',
    width: 200,
  },
};
