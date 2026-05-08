import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import InfoInputSection from './InfoInputSection';
import {useCardNumbers} from '../../hooks/useCardNumbers';
import {useExpiryDate} from '../../hooks/useExpiryDate';
import {useCvcNumber} from '../../hooks/useCvcNumber';
import type {CardNumbersType} from '../../../../common/types/CardInfoType';

const makeMockNumberField = (cardNumbers: CardNumbersType) => ({
  cardNumbers,
  format: [4, 4, 4, 4] as number[],
  brand: null,
  isComplete: cardNumbers.every((c) => c.length === 4),
  hasAnyError: false,
  firstErrorIdx: -1,
  errorMsg: '',
  handleChange: fn(),
  handleBlur: fn(),
});

const makeMockExpiryField = (expiryMonth: string, expiryYear: string) => ({
  expiryMonth,
  expiryYear,
  isComplete: expiryMonth.length === 2 && expiryYear.length === 2,
  hasAnyError: false,
  firstErrorIdx: -1,
  errorMsg: '',
  handleMonthChange: fn(),
  handleYearChange: fn(),
  handleBlur: fn(),
});

const makeMockCvcField = (cvcNumber = '') => ({
  cvcNumber,
  isComplete: cvcNumber.length === 3,
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
    expiryField: makeMockExpiryField('', ''),
    cvcField: makeMockCvcField(),
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    numberField: makeMockNumberField(['4123', '56', '', '']),
    expiryField: makeMockExpiryField('1', ''),
  },
};

export const Filled: Story = {
  args: {
    numberField: makeMockNumberField(['4123', '5678', '1234', '5678']),
    expiryField: makeMockExpiryField('12', '30'),
    cvcField: makeMockCvcField('123'),
  },
};

export const Interactive: Story = {
  render: function InteractiveInfoInputSection() {
    const numberField = useCardNumbers();
    const expiryField = useExpiryDate();
    const cvcField = useCvcNumber();

    return (
      <InfoInputSection
        numberField={numberField}
        expiryField={expiryField}
        cvcField={cvcField}
      />
    );
  },
};
