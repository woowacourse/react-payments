import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import NumberField from '../../../../../feature/CardRegister/components/InfoInputSection/NumberField';
import {
  useNumbersField,
  type NumbersFieldType,
} from '../../../../../feature/CardRegister/hooks/useNumbersField';

const createNumberField = (
  overrides: Partial<NumbersFieldType> = {},
): NumbersFieldType => ({
  cardNumbers: ['', '', '', ''],
  segmentLengths: [4, 4, 4, 4] as const,
  firstErrorIndex: -1,
  errorMessage: '',
  isComplete: false,
  setInputRef: () => () => undefined,
  handleNumbersChange: fn(),
  handleNumbersBlur: fn(),
  handleKeyDown: fn(),
  ...overrides,
});

const meta = {
  title: 'feature/CardRegister/components/NumberField',
  component: NumberField,
  tags: ['autodocs'],
  args: {
    field: createNumberField(),
  },
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    field: createNumberField({
      cardNumbers: ['1234', '56', '', ''],
    }),
  },
};

export const Filled: Story = {
  args: {
    field: createNumberField({
      cardNumbers: ['1234', '5678', '1234', '5678'],
      isComplete: true,
    }),
  },
};

export const Error: Story = {
  args: {
    field: createNumberField({
      cardNumbers: ['123', '', '', ''],
      firstErrorIndex: 0,
      errorMessage: '카드 번호 4자리를 입력해 주세요',
    }),
  },
};

export const Interactive: Story = {
  render: function InteractiveNumberField() {
    const field = useNumbersField({});

    return <NumberField field={field} />;
  },
};
