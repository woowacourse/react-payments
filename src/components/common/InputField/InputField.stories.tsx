import type { Meta, StoryObj } from '@storybook/react';

import InputField from './InputField';
import Input from '../Input/Input';

const meta = {
  title: 'component/common/InputField',
  component: InputField,
  parameters: {
    controls: { exclude: 'children' },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: '예시',
    errorMessage: '',
    inputCount: 1,
    children: <Input isError={false} type="text" placeholder="sample" />,
  },
};

export const Error: Story = {
  args: {
    label: '예시',
    errorMessage: '잘못된 입력입니다.',
    inputCount: 1,
    children: <Input isError={true} type="text" placeholder="sample" />,
  },
};
