import {useState} from 'react';
import type {ChangeEvent} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import PasswordField from './PasswordField';
import type {CardRegisterInputProps} from '../shared.types';

const createInputProps = (value: string): CardRegisterInputProps => ({
  type: 'password',
  value,
  maxLength: 2,
  placeholder: '',
  onChange: fn(),
  onBlur: fn(),
});

const meta = {
  title: 'feature/CardRegister/components/fields/PasswordField',
  component: PasswordField,
  tags: ['autodocs'],
  args: {
    inputProps: createInputProps(''),
    errorMessage: '',
  },
} satisfies Meta<typeof PasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    inputProps: createInputProps('12'),
  },
};

export const WithErr: Story = {
  args: {
    inputProps: createInputProps('1'),
    errorMessage: '비밀번호 앞 2자리를 입력해 주세요',
  },
};

export const Interactive: Story = {
  render: function InteractivePasswordField(args) {
    const [password, setPassword] = useState('');
    const inputProps = {
      ...createInputProps(password),
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.currentTarget.value;
        if (!/^\d*$/.test(nextValue) || nextValue.length > 2) return;
        setPassword(nextValue);
      },
    };

    return <PasswordField {...args} inputProps={inputProps} />;
  },
};
