import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, LABEL, PLACEHOLDER, ERROR } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_CVC',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CVCDefault: Story = {
  args: {
    title: TITLE.cvc,
    children: (
      <InputField label={LABEL.cvc} error="">
        <Input placeholder={PLACEHOLDER.cvc} value="" maxLength={MAX_LENGTH.cvc} />
      </InputField>
    ),
  },
};

export const CVCValid: Story = {
  args: {
    title: TITLE.cvc,
    children: (
      <InputField label={LABEL.cvc} error="">
        <Input placeholder={PLACEHOLDER.cvc} value="123" maxLength={MAX_LENGTH.cvc} />
      </InputField>
    ),
  },
};

export const CVCTypeError: Story = {
  args: {
    title: TITLE.cvc,
    children: (
      <InputField label={LABEL.cvc} error={ERROR.cvc}>
        <>
          <Input placeholder={PLACEHOLDER.cvc} value="12a" maxLength={MAX_LENGTH.cvc} invalid />
        </>
      </InputField>
    ),
  },
};

export const CVCLengthError: Story = {
  args: {
    title: TITLE.cvc,
    children: (
      <InputField label={LABEL.cvc} error={ERROR.cvc}>
        <>
          <Input placeholder={PLACEHOLDER.cvc} value="12" maxLength={MAX_LENGTH.cvc} invalid />
        </>
      </InputField>
    ),
  },
};
