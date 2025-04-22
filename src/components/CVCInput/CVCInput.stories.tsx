import type { Meta, StoryObj } from '@storybook/react';
import CVCInput from './CVCInput';

const meta: Meta<typeof CVCInput> = {
  title: 'Components/CVCInput',
  component: CVCInput,
  tags: ['autodocs'],
  argTypes: {
    values: {
      control: 'object',
      description: '값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CVCInput>;

export const Default: Story = {
  args: {
    values: ['123'],
  },
};
