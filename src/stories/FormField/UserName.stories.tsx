import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import { USER_NAME_ERROR_MESSAGE } from '../../hooks/useUserName';

const meta = {
  title: 'FormField_UserName',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UserNameDefault: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    children: (
      <InputField label="소유자 이름" error="">
        <Input placeholder="LAST_NAME FIRST_NAME" value="" maxLength={20} />
      </InputField>
    ),
  },
};

export const UserNameValid: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    children: (
      <InputField label="소유자 이름" error="">
        <Input placeholder="LAST_NAME FIRST_NAME" value="SIMO COOKIE" maxLength={20} />
      </InputField>
    ),
  },
};

export const UserNameLowerCaseTypeError: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    children: (
      <InputField label="소유자 이름" error={USER_NAME_ERROR_MESSAGE}>
        <Input placeholder="LASTNAME FIRSTNAME" value="simo cookie" maxLength={20} invalid />
      </InputField>
    ),
  },
};

export const UserNameKoreanTypeError: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    children: (
      <InputField label="소유자 이름" error={USER_NAME_ERROR_MESSAGE}>
        <Input placeholder="LASTNAME FIRSTNAME" value="시모 쿠키" maxLength={20} invalid />
      </InputField>
    ),
  },
};

export const UserNameJoinTypeError: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    children: (
      <InputField label="소유자 이름" error={USER_NAME_ERROR_MESSAGE}>
        <Input placeholder="LASTNAME FIRSTNAME" value="SIMOCOOKIE" maxLength={20} invalid />
      </InputField>
    ),
  },
};
