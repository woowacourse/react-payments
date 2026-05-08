import type {Meta, StoryObj} from '@storybook/react-vite';
import {fn} from 'storybook/test';

import InfoInputSection from './InfoInputSection';
import {useCardNumbers} from '../../hooks/useCardNumbers';
import {useExpiryDate} from '../../hooks/useExpiryDate';
import {useCvcNumber} from '../../hooks/useCvcNumber';
import {useState} from 'react';
import type {CardCompanyType} from '../../domain/cardPolicy';
import type {CardNumbersType} from '../../../../common/types/CardInfoType';

const makeMockNumberField = (cardNumbers: CardNumbersType, isComplete = false) => ({
  cardNumbers,
  format: [4, 4, 4, 4] as number[],
  brand: null,
  isComplete,
  hasAnyError: false,
  firstErrorIdx: -1,
  errorMsg: '',
  handleChange: fn(),
  handleBlur: fn(),
});

const makeMockExpiryField = (expiryMonth = '', expiryYear = '') => ({
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
    expiryField: makeMockExpiryField(),
    cvcField: makeMockCvcField(),
    selectedCompany: null,
    onCompanyChange: fn(),
    showCompanySelect: false,
    showExpiry: false,
    showCvc: false,
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberOnly: Story = {};

export const WithCompanySelect: Story = {
  args: {
    numberField: makeMockNumberField(['4123', '5678', '1234', '5678'], true),
    showCompanySelect: true,
  },
};

export const WithExpiry: Story = {
  args: {
    numberField: makeMockNumberField(['4123', '5678', '1234', '5678'], true),
    showCompanySelect: true,
    selectedCompany: 'shinhan',
    showExpiry: true,
  },
};

export const Interactive: Story = {
  render: function InteractiveInfoInputSection() {
    const numberField = useCardNumbers();
    const expiryField = useExpiryDate();
    const cvcField = useCvcNumber();
    const [selectedCompany, setSelectedCompany] = useState<CardCompanyType | null>(null);

    const showCompanySelect = numberField.isComplete;
    const showExpiry = showCompanySelect && selectedCompany !== null;
    const showCvc = showExpiry && expiryField.isComplete;

    return (
      <InfoInputSection
        numberField={numberField}
        expiryField={expiryField}
        cvcField={cvcField}
        selectedCompany={selectedCompany}
        onCompanyChange={setSelectedCompany}
        showCompanySelect={showCompanySelect}
        showExpiry={showExpiry}
        showCvc={showCvc}
      />
    );
  },
};
