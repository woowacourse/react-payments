import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, LABEL, PLACEHOLDER, ERROR, CAPTION } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_Password',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PasswordDefault: Story = {
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: (
      <InputField label={LABEL.password} error="">
        <Input
          placeholder={PLACEHOLDER.password}
          value=""
          maxLength={MAX_LENGTH.password}
          type="password"
        />
      </InputField>
    ),
  },
};

export const PasswordValid: Story = {
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: (
      <InputField label={LABEL.password} error="">
        <Input
          placeholder={PLACEHOLDER.password}
          value="12"
          maxLength={MAX_LENGTH.password}
          type="password"
        />
      </InputField>
    ),
  },
};

export const PasswordTypeError: Story = {
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: (
      <InputField label={LABEL.password} error={ERROR.password}>
        <Input
          placeholder={PLACEHOLDER.password}
          value="1a"
          maxLength={MAX_LENGTH.password}
          type="password"
          invalid
        />
      </InputField>
    ),
  },
};

export const PasswordLengthError: Story = {
  args: {
    title: TITLE.password,
    caption: CAPTION.password,
    children: (
      <InputField label={LABEL.password} error={ERROR.password}>
        <Input
          placeholder={PLACEHOLDER.password}
          value="1"
          maxLength={MAX_LENGTH.password}
          type="password"
          invalid
        />
      </InputField>
    ),
  },
};
