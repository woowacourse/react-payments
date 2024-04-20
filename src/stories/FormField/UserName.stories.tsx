import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';
import FormField from '../../components/FormField/FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, LABEL, PLACEHOLDER, ERROR } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

const meta = {
  title: 'FormField_소유자_이름',
  component: FormField,
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    title: TITLE.userName,
    children: (
      <InputField label={LABEL.userName} error="">
        <Input placeholder={PLACEHOLDER.userName} value="" maxLength={MAX_LENGTH.userName} />
      </InputField>
    ),
  },
};

export const 정상입력: Story = {
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

export const 유저이름에_한글이_들어간_경우: Story = {
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

export const 유저이름_입력_사이의_공백이_없을경우: Story = {
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
