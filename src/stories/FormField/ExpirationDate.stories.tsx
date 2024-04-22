import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, CAPTION, LABEL, PLACEHOLDER, ERROR } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_유효기간',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
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

export const 정상입력: Story = {
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

export const 월_입력의_형식이_아닌_경우: Story = {
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
            aria-aria-invalid
          />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
    ),
  },
};

export const 월_입력_길이가_맞지_않은_경우: Story = {
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
            aria-aria-invalid
          />
          <Input placeholder={PLACEHOLDER.year} value="24" maxLength={MAX_LENGTH.expirationDate} />
        </>
      </InputField>
    ),
  },
};

export const 년_입력의_형식이_아닌_경우: Story = {
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
            aria-invalid
          />
        </>
      </InputField>
    ),
  },
};

export const 년_입력의_길이가_맞지_않은_경우: Story = {
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
            aria-invalid
          />
        </>
      </InputField>
    ),
  },
};
