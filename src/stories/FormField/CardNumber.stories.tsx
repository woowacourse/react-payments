import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, CAPTION, LABEL, PLACEHOLDER, ERROR } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_CardNumber',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumberDefault: Story = {
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: (
      <InputField label={LABEL.cardNumber} error="">
        <>
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
          <Input placeholder={PLACEHOLDER.cardNumber} value="" maxLength={MAX_LENGTH.cardNumber} />
        </>
      </InputField>
    ),
  },
};

export const CardNumberValid: Story = {
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: (
      <InputField label={LABEL.cardNumber} error="">
        <>
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="1234"
            maxLength={MAX_LENGTH.cardNumber}
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="5678"
            maxLength={MAX_LENGTH.cardNumber}
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="1234"
            maxLength={MAX_LENGTH.cardNumber}
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="5678"
            maxLength={MAX_LENGTH.cardNumber}
          />
        </>
      </InputField>
    ),
  },
};

export const CardNumberTypeError: Story = {
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: (
      <InputField label={LABEL.cardNumber} error={ERROR.cardNumber}>
        <>
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="simo"
            maxLength={MAX_LENGTH.cardNumber}
            aria-invalid
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="123d"
            maxLength={MAX_LENGTH.cardNumber}
            aria-invalid
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="123!"
            maxLength={MAX_LENGTH.cardNumber}
            aria-invalid
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="5678"
            maxLength={MAX_LENGTH.cardNumber}
          />
        </>
      </InputField>
    ),
  },
};

export const CardNumberLengthError: Story = {
  args: {
    title: TITLE.cardNumber,
    caption: CAPTION.cardNumber,
    children: (
      <InputField label={LABEL.cardNumber} error={ERROR.cardNumber}>
        <>
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="123"
            maxLength={MAX_LENGTH.cardNumber}
            aria-invalid
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="12"
            maxLength={MAX_LENGTH.cardNumber}
            aria-invalid
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="1"
            maxLength={MAX_LENGTH.cardNumber}
            aria-invalid
          />
          <Input
            placeholder={PLACEHOLDER.cardNumber}
            value="5678"
            maxLength={MAX_LENGTH.cardNumber}
          />
        </>
      </InputField>
    ),
  },
};
