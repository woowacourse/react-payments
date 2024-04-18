import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, CAPTION, LABEL, PLACEHOLDER, ERROR } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_ExpirationDate',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExpirationDateDefault: Story = {
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: (
      <InputField label={LABEL.expirationDate} error="">
        <>
          <Input placeholder={PLACEHOLDER.month} value="" maxLength={MAX_LENGTH.expirationDate} />
          <Input placeholder={PLACEHOLDER.year} value="" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateValid: Story = {
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: (
      <InputField label={LABEL.expirationDate} error="">
        <>
          <Input placeholder={PLACEHOLDER.month} value="04" maxLength={MAX_LENGTH.expirationDate} />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateMonthTypeError: Story = {
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: (
      <InputField label={LABEL.expirationDate} error={ERROR.month}>
        <>
          <Input
            placeholder={PLACEHOLDER.month}
            value="13"
            maxLength={MAX_LENGTH.expirationDate}
            invalid
          />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateMonthLengthError: Story = {
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: (
      <InputField label={LABEL.expirationDate} error={ERROR.month}>
        <>
          <Input
            placeholder={PLACEHOLDER.month}
            value="1"
            maxLength={MAX_LENGTH.expirationDate}
            invalid
          />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateYearTypeError: Story = {
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: (
      <InputField label={LABEL.expirationDate} error={ERROR.year}>
        <>
          <Input placeholder={PLACEHOLDER.month} value="04" maxLength={MAX_LENGTH.expirationDate} />
          <Input
            placeholder={PLACEHOLDER.year}
            value="2d"
            maxLength={MAX_LENGTH.expirationDate}
            invalid
          />
        </>
      </InputField>
    ),
  },
};

export const ExpirationDateYearLengthError: Story = {
  args: {
    title: TITLE.expirationDate,
    caption: CAPTION.expirationDate,
    children: (
      <InputField label={LABEL.expirationDate} error={ERROR.year}>
        <>
          <Input placeholder={PLACEHOLDER.month} value="04" maxLength={MAX_LENGTH.expirationDate} />
          <Input
            placeholder={PLACEHOLDER.year}
            value="1"
            maxLength={MAX_LENGTH.expirationDate}
            invalid
          />
        </>
      </InputField>
    ),
  },
};
