import {useState} from 'react';
import type {ChangeEvent} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import CvcField from './CvcField';
import type {CardRegisterInputProps} from '../shared.types';

const createInputProps = (value: string): CardRegisterInputProps => ({
  value,
  maxLength: 3,
  placeholder: '123',
  onChange: fn(),
  onBlur: fn(),
});

const meta = {
  title: 'feature/CardRegister/components/inputs/CvcField',
  component: CvcField,
  tags: ['autodocs'],
  args: {
    inputProps: createInputProps(''),
    errorMessage: '',
  },
} satisfies Meta<typeof CvcField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Filled: Story = {
  args: {
    inputProps: createInputProps('123'),
  },
};

export const WithErr: Story = {
  args: {
    inputProps: createInputProps('12'),
    errorMessage: 'CVC 번호 3자리를 입력해 주세요',
  },
};

export const Interactive: Story = {
  render: function InteractiveCvcField(args) {
    const [cvcNumber, setCvcNumber] = useState('');
    const inputProps = {
      ...createInputProps(cvcNumber),
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.currentTarget.value;
        if (!/^\d*$/.test(nextValue) || nextValue.length > 3) return;
        setCvcNumber(nextValue);
      },
    };

    return <CvcField {...args} inputProps={inputProps} />;
  },
};
