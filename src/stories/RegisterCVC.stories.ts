import { Meta, StoryObj } from '@storybook/react';
import RegisterCVC from '../components/registerSection/RegisterCVC';
import { fn } from '@storybook/test';

const meta: Meta<typeof RegisterCVC> = {
  title: 'RegisterStep/RegisterCVC',
  component: RegisterCVC,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'CVC 입력값',
    },
    isError: {
      control: 'boolean',
      description: '에러 상태에 관한 상태 값',
    },
  },
  args: {
    onChange: fn(),
    onEnter: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof RegisterCVC>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
