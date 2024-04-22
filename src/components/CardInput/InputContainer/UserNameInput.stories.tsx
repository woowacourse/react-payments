import { Meta, StoryObj } from '@storybook/react';

import UserNameInput from './CardNumbersInput';

const meta: Meta<typeof UserNameInput> = {
  title: 'Input',
  component: UserNameInput,
  args: {
    maxLength: 100,
    userName: '',
    nameError: false,
    onNameChange: () => {},
  },
};

export default meta;

type Story = StoryObj<typeof UserNameInput>;

export const Default: Story = {
  args: {
    userName: '사용자 이름',
  },
};
