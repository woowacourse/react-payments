import {useState} from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import InfoInputSection from './InfoInputSection';
import {useCardNumbers} from '../../hooks/useCardNumbers';
import type {CardNumbersType} from '../../../../common/types/CardInfoType';

type MockNumberField = {
  cardNumbers: CardNumbersType;
  format: number[];
  brand: null;
  isComplete: boolean;
  hasAnyError: boolean;
  firstErrorIdx: number;
  errorMsg: string;
  handleChange: () => void;
  handleBlur: () => void;
};

const makeMockNumberField = (cardNumbers: CardNumbersType): MockNumberField => ({
  cardNumbers,
  format: [4, 4, 4, 4],
  brand: null,
  isComplete: cardNumbers.every((c) => c.length === 4),
  hasAnyError: false,
  firstErrorIdx: -1,
  errorMsg: '',
  handleChange: fn(),
  handleBlur: fn(),
});

const meta = {
  title: 'feature/CardRegister/components/InfoInputSection',
  component: InfoInputSection,
  tags: ['autodocs'],
  args: {
    numberField: makeMockNumberField(['', '', '', '']),
    expiryMonth: '',
    setExpiryMonth: fn(),
    expiryYear: '',
    setExpiryYear: fn(),
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    numberField: makeMockNumberField(['4123', '56', '', '']),
    expiryMonth: '1',
    expiryYear: '',
  },
};

export const Filled: Story = {
  args: {
    numberField: makeMockNumberField(['4123', '5678', '1234', '5678']),
    expiryMonth: '12',
    expiryYear: '30',
  },
};

export const Interactive: Story = {
  render: function InteractiveInfoInputSection() {
    const numberField = useCardNumbers();
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');

    return (
      <InfoInputSection
        numberField={numberField}
        expiryMonth={expiryMonth}
        setExpiryMonth={setExpiryMonth}
        expiryYear={expiryYear}
        setExpiryYear={setExpiryYear}
      />
    );
  },
};
