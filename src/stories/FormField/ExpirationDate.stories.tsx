import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import { MONTH_ERROR_MESSAGE, YEAR_ERROR_MESSAGE } from '../../hooks/useExpirationDate';

const meta = {
  title: 'FormField_ExpirationDate',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExpirationDateDefault: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    children: (
      <InputField label="유효기간" error="">
        <>
          <Input placeholder="MM" value="" maxLength={2} />
          <Input placeholder="YY" value="" maxLength={2} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateValid: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    children: (
      <InputField label="유효기간" error="">
        <>
          <Input placeholder="MM" value="04" maxLength={2} />
          <Input placeholder="YY" value="24" maxLength={2} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateMonthTypeError: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    children: (
      <InputField label="유효기간" error={MONTH_ERROR_MESSAGE}>
        <>
          <Input placeholder="MM" value="13" maxLength={2} invalid />
          <Input placeholder="YY" value="24" maxLength={2} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateMonthLengthError: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    children: (
      <InputField label="유효기간" error={MONTH_ERROR_MESSAGE}>
        <>
          <Input placeholder="MM" value="1" maxLength={2} invalid />
          <Input placeholder="YY" value="24" maxLength={2} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateYearTypeError: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    children: (
      <InputField label="유효기간" error={YEAR_ERROR_MESSAGE}>
        <>
          <Input placeholder="MM" value="04" maxLength={2} />
          <Input placeholder="YY" value="2d" maxLength={2} invalid />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateYearLengthError: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    caption: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    children: (
      <InputField label="유효기간" error={YEAR_ERROR_MESSAGE}>
        <>
          <Input placeholder="MM" value="04" maxLength={2} />
          <Input placeholder="YY" value="1" maxLength={2} invalid />
        </>
      </InputField>
    ),
  },
};
