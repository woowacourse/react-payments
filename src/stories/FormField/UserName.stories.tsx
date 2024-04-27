import type { Meta, StoryObj } from '@storybook/react';
import UserName from '../../components/FormField/UserName';
import { fn } from '@storybook/test';

const meta = {
  title: 'FormField_소유자_이름',
  component: UserName,
} satisfies Meta<typeof UserName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    userNameState: '',
    setUserNameState: fn(),
    isUserNameError: false,
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 정상입력: Story = {
  args: {
    userNameState: 'KIM JINHO',
    setUserNameState: fn(),
    isUserNameError: false,
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 유저이름에_한글이_들어간_경우: Story = {
  args: {
    userNameState: '쿠키',
    setUserNameState: fn(),
    isUserNameError: true,
    showNextFieldOnLastElementBlur: fn(),
  },
};

export const 유저이름_입력_사이의_공백이_없을경우: Story = {
  args: {
    userNameState: 'KIMJINHO',
    setUserNameState: fn(),
    isUserNameError: true,
    showNextFieldOnLastElementBlur: fn(),
  },
};
