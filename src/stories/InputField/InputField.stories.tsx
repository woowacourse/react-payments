import type { Meta, StoryObj } from '@storybook/react';
import InputField from '../../components/InputField/InputField';
import Input from '../../components/Input/Input';

const meta = {
  title: 'InputField',
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    label: '라벨',
    error: '',
    children: (
      <>
        <Input placeholder="1234" />
        <Input placeholder="5678" />
        <Input placeholder="1234" />
        <Input placeholder="5678" />
      </>
    ),
  },
};

export const 정상입력: Story = {
  args: {
    label: '라벨',
    error: '',
    children: (
      <>
        <Input placeholder="1234" value="1234" />
        <Input placeholder="5678" value="5678" />
        <Input placeholder="1234" value="1234" />
        <Input placeholder="5678" value="5678" />
      </>
    ),
  },
};

export const 에러상태: Story = {
  args: {
    label: '라벨',
    error: '시모와 쿠키는 숫자가 아닙니다.',
    children: (
      <>
        <Input placeholder="1234" value="simo" aria-invalid />
        <Input placeholder="5678" value="cookie" aria-invalid />
        <Input placeholder="1234" value="1234" />
        <Input placeholder="5678" value="5678" />
      </>
    ),
  },
};
