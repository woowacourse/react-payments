import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, LABEL, PLACEHOLDER, ERROR } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_UserName',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UserNameDefault: Story = {
  args: {
    title: TITLE.userName,
    children: (
      <InputField label={LABEL.userName} error="">
        <Input placeholder={PLACEHOLDER.userName} value="" maxLength={MAX_LENGTH.userName} />
      </InputField>
    ),
  },
};

export const UserNameValid: Story = {
  args: {
    title: TITLE.userName,
    children: (
      <InputField label={LABEL.userName} error="">
        <Input
          placeholder={PLACEHOLDER.userName}
          value="SIMO COOKIE"
          maxLength={MAX_LENGTH.userName}
        />
      </InputField>
    ),
  },
};

export const UserNameLowerCaseTypeError: Story = {
  args: {
    title: TITLE.userName,
    children: (
      <InputField label={LABEL.userName} error={ERROR.userName}>
        <Input
          placeholder={PLACEHOLDER.userName}
          value="simo cookie"
          maxLength={MAX_LENGTH.userName}
          aria-invalid
        />
      </InputField>
    ),
  },
};

export const UserNameKoreanTypeError: Story = {
  args: {
    title: TITLE.userName,
    children: (
      <InputField label={LABEL.userName} error={ERROR.userName}>
        <Input
          placeholder={PLACEHOLDER.userName}
          value="시모 쿠키"
          maxLength={MAX_LENGTH.userName}
          aria-invalid
        />
      </InputField>
    ),
  },
};

export const UserNameJoinTypeError: Story = {
  args: {
    title: TITLE.userName,
    children: (
      <InputField label={LABEL.userName} error={ERROR.userName}>
        <Input
          placeholder={PLACEHOLDER.userName}
          value="SIMOCOOKIE"
          maxLength={MAX_LENGTH.userName}
          aria-invalid
        />
      </InputField>
    ),
  },
};
