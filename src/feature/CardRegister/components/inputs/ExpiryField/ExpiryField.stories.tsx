import {useState} from 'react';
import type {ChangeEvent} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import ExpiryField from './ExpiryField';
import type {CardRegisterInputProps, ExpiryInputProps} from '../shared.types';

const createInputProps = (value: string, placeholder: string): CardRegisterInputProps => ({
  value,
  maxLength: 2,
  placeholder,
  onChange: fn(),
  onBlur: fn(),
});

const createInputPropsGroup = (month: string, year: string): ExpiryInputProps => ({
  month: createInputProps(month, 'MM'),
  year: createInputProps(year, 'YY'),
});

const meta = {
  title: 'feature/CardRegister/components/inputs/ExpiryField',
  component: ExpiryField,
  tags: ['autodocs'],
  args: {
    inputProps: createInputPropsGroup('', ''),
    errorMessage: '',
    errorIndex: -1,
  },
} satisfies Meta<typeof ExpiryField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    inputProps: createInputPropsGroup('5', ''),
  },
};

export const Filled: Story = {
  args: {
    inputProps: createInputPropsGroup('12', '30'),
  },
};

export const WithErr: Story = {
  args: {
    inputProps: createInputPropsGroup('13', ''),
    errorMessage: '01~12 사이의 월을 입력해 주세요',
    errorIndex: 0,
  },
};

export const Interactive: Story = {
  render: function InteractiveExpiryField(args) {
    const [expiryDate, setExpiryDate] = useState({month: '', year: ''});

    const changeMonth = (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value;
      if (!/^\d*$/.test(nextValue) || nextValue.length > 2) return;
      setExpiryDate((prev) => ({...prev, month: nextValue}));
    };

    const changeYear = (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.currentTarget.value;
      if (!/^\d*$/.test(nextValue) || nextValue.length > 2) return;
      setExpiryDate((prev) => ({...prev, year: nextValue}));
    };

    const inputProps = {
      month: {...createInputProps(expiryDate.month, 'MM'), onChange: changeMonth},
      year: {...createInputProps(expiryDate.year, 'YY'), onChange: changeYear},
    };

    return <ExpiryField {...args} inputProps={inputProps} />;
  },
};
