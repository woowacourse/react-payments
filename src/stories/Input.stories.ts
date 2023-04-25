import type { Meta, StoryObj } from '@storybook/react';
import Input from '../components/common/Input/Input';

const meta = {
  component: Input,
  title: 'Input',
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    width: '100%',
    value: '김고니',
    name: 'cardOwnerName',
    maxLength: 30,
    onChange: () => {},
  },
};

export default meta;
