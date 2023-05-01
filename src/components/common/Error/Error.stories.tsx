import { Meta, StoryObj } from '@storybook/react';
import Error from './Error';

const meta: Meta<typeof Error> = {
  component: Error,
  title: 'Error',
};

export default meta;

type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    text: '비밀번호는 숫자만 입력 가능합니다.',
  },
};

export const LongError: Story = {
  args: {
    text: '사용자 이름은 한글 혹은 영어로만 입력 가능합니다.',
  },
};
