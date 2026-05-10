import {useState} from 'react';
import type {ChangeEvent} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import NumberField from './NumberField';
import type {CardRegisterInputProps} from '../shared.types';

const generatePlaceholder = (length: number) => Array.from({length}, (_, i) => (i + 1) % 10).join('');

const createInputProps = (value: string, maxLength: number): CardRegisterInputProps => ({
  value,
  maxLength,
  placeholder: generatePlaceholder(maxLength),
  onChange: fn(),
  onBlur: fn(),
});

const createInputPropsList = (values: string[]) => values.map((value) => createInputProps(value, 4));

const meta = {
  title: 'feature/CardRegister/components/inputs/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  args: {
    inputProps: createInputPropsList(['', '', '', '']),
    errorMessage: '',
    errorIndex: -1,
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    inputProps: createInputPropsList(['1234', '56', '', '']),
  },
};

export const Filled: Story = {
  args: {
    inputProps: createInputPropsList(['1234', '5678', '1234', '5678']),
  },
};

export const WithErr: Story = {
  args: {
    inputProps: createInputPropsList(['1234', '56', '', '']),
    errorMessage: '카드 번호 4자리를 입력해 주세요',
    errorIndex: 1,
  },
};

export const Interactive: Story = {
  render: function InteractiveNumberField(args) {
    const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
    const inputProps = cardNumbers.map((value, index) => ({
      ...createInputProps(value, 4),
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.currentTarget.value;
        if (!/^\d*$/.test(nextValue) || nextValue.length > 4) return;
        setCardNumbers((prev) => prev.map((chunk, i) => (i === index ? nextValue : chunk)));
      },
    }));

    return <NumberField {...args} inputProps={inputProps} />;
  },
};
