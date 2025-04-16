import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: '값',
    },
    maxLength: {
      control: 'text',
      description: '최대 길이',
    },
    placeHolder: {
      control: 'text',
      description: '입력 힌트',
    },
    isError: {
      option: [true, false],
      description: '에러 여부',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const CardNumberInput: Story = {
  args: {
    value: '5511',
    maxLength: 4,
    placeHolder: '1234',
    isError: false,
  },
};
export const ExpirationDateInput: Story = {
  args: {
    value: '12',
    maxLength: 2,
    placeHolder: 'MM',
    isError: false,
  },
};
export const CVCInput: Story = {
  args: {
    value: '333',
    maxLength: 3,
    placeHolder: '123',
    isError: false,
  },
};

export const InvalidCardNumberInput: Story = {
  args: {
    value: 'aaaa',
    maxLength: 4,
    placeHolder: '1234',
    isError: true,
  },
};
