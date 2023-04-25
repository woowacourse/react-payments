import { Meta, StoryObj } from '@storybook/react';
import Input from '../../components/common/Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: {
    type: 'text',
    value: '안녕하세요',
    placeholder: '',
  },
};

export const TextTypePasswordInput: Story = {
  args: {
    type: 'text',
    placeholder: '비밀번호를 입력해주세요.',
    isPassword: true,
  },
};

export const TextTypeNumberInput: Story = {
  args: {
    type: 'text',
    value: '1234',
    placeholder: '',
    isNumber: true,
  },
};

export const WrongInput: Story = {
  args: {
    type: 'text',
    placeholder: '',
    isWrong: true,
  },
};

export const NumberInput: Story = {
  args: {
    type: 'number',
    value: '12312412',
    placeholder: 'MM',
  },
};

export const PasswordInput: Story = {
  args: {
    value: '12312412',
    type: 'password',
    placeholder: '',
  },
};

export const TextAlginCenterInput: Story = {
  args: {
    value: '반갑습니다',
    type: 'text',
    textAlign: 'center',
    placeholder: '',
  },
};
