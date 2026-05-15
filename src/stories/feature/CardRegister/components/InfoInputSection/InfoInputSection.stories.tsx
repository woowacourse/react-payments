import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

import InfoInputSection from '../../../../../feature/CardRegister/components/InfoInputSection/InfoInputSection';
import { CARD_COMPANIES } from '../../../../../domain/card/constant/cardCompanies';
import { useCardForm } from '../../../../../feature/CardRegister/hooks/useCardForm';
import type { CardFormFieldsType } from '../../../../../feature/CardRegister/hooks/useCardForm';
import type { CardFormInfoType } from '../../../../../domain/card/types/card';

const cardCompanyOptions = CARD_COMPANIES.map((cardCompany) => ({
  value: cardCompany.id,
  label: cardCompany.name,
}));

const createFields = (
  cardFormInfo: CardFormInfoType,
  overrides: Partial<CardFormFieldsType> = {},
): CardFormFieldsType => ({
  numbers: {
    cardNumbers: cardFormInfo.cardNumbers,
    segmentLengths: [4, 4, 4, 4] as const,
    firstErrorIndex: -1,
    errorMessage: '',
    isComplete: false,
    setInputRef: () => () => undefined,
    handleNumbersChange: fn(),
    handleNumbersBlur: fn(),
    handleKeyDown: fn(),
  },
  cardCompany: {
    cardCompanyId: cardFormInfo.cardCompanyId,
    cardCompanyOptions,
    isComplete: cardFormInfo.cardCompanyId !== null,
    handleChange: fn(),
  },
  expiry: {
    expiryMonth: cardFormInfo.expiryMonth,
    expiryYear: cardFormInfo.expiryYear,
    firstErrorIndex: -1,
    errorMessage: '',
    isComplete: false,
    setInputRef: () => () => undefined,
    handleMonthChange: fn(),
    handleYearChange: fn(),
    handleExpiryBlur: fn(),
    handleKeyDown: fn(),
  },
  cvc: {
    cvcNumber: cardFormInfo.cvcNumber,
    errorMessage: '',
    hasError: false,
    isComplete: false,
    handleChange: fn(),
    handleBlur: fn(),
  },
  password: {
    password: cardFormInfo.password,
    errorMessage: '',
    hasError: false,
    isComplete: false,
    handleChange: fn(),
    handleBlur: fn(),
  },
  ...overrides,
});

const emptyCardFormInfo: CardFormInfoType = {
  cardNumbers: ['', '', '', ''],
  expiryMonth: '',
  expiryYear: '',
  cvcNumber: '',
  cardCompanyId: null,
  password: '',
};

const filledCardFormInfo: CardFormInfoType = {
  cardNumbers: ['4123', '5678', '1234', '5678'],
  expiryMonth: '12',
  expiryYear: '30',
  cvcNumber: '123',
  cardCompanyId: 'bc',
  password: '12',
};

const meta = {
  title: 'feature/CardRegister/components/InfoInputSection',
  component: InfoInputSection,
  tags: ['autodocs'],
  args: {
    fields: createFields(emptyCardFormInfo),
    cardFormInfo: emptyCardFormInfo,
    currentStep: 0,
    hasFormError: true,
    onRegisterComplete: fn(),
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    fields: createFields({
      ...emptyCardFormInfo,
      cardNumbers: ['4123', '56', '', ''],
    }),
    cardFormInfo: {
      ...emptyCardFormInfo,
      cardNumbers: ['4123', '56', '', ''],
    },
    currentStep: 1,
    hasFormError: true,
  },
};

export const Filled: Story = {
  args: {
    fields: createFields(filledCardFormInfo, {
      numbers: {
        cardNumbers: filledCardFormInfo.cardNumbers,
        segmentLengths: [4, 4, 4, 4] as const,
        firstErrorIndex: -1,
        errorMessage: '',
        isComplete: true,
        setInputRef: () => () => undefined,
        handleNumbersChange: fn(),
        handleNumbersBlur: fn(),
        handleKeyDown: fn(),
      },
      expiry: {
        expiryMonth: filledCardFormInfo.expiryMonth,
        expiryYear: filledCardFormInfo.expiryYear,
        firstErrorIndex: -1,
        errorMessage: '',
        isComplete: true,
        setInputRef: () => () => undefined,
        handleMonthChange: fn(),
        handleYearChange: fn(),
        handleExpiryBlur: fn(),
        handleKeyDown: fn(),
      },
      cvc: {
        cvcNumber: filledCardFormInfo.cvcNumber,
        errorMessage: '',
        hasError: false,
        isComplete: true,
        handleChange: fn(),
        handleBlur: fn(),
      },
      password: {
        password: filledCardFormInfo.password,
        errorMessage: '',
        hasError: false,
        isComplete: true,
        handleChange: fn(),
        handleBlur: fn(),
      },
    }),
    cardFormInfo: filledCardFormInfo,
    currentStep: 5,
    hasFormError: false,
  },
};

export const Interactive: Story = {
  render: function InteractiveInfoInputSection(args) {
    const { fields, cardFormInfo, currentStep, hasFormError } = useCardForm();

    return (
      <InfoInputSection
        {...args}
        fields={fields}
        cardFormInfo={cardFormInfo}
        currentStep={currentStep}
        hasFormError={hasFormError}
      />
    );
  },
};
