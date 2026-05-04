import type { Meta, StoryObj } from '@storybook/react-vite';

import { Field } from './Field';
import { Input } from '../input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Field',
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof meta>;

const mocking = (
  <>
    <Input value="5511" />
    <Input />
    <Input />
    <Input />
  </>
);

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    label: '카드 번호',
    children: mocking,
    errorMessage: '',
  },
};

export const IsError: Story = {
  args: {
    label: '카드 번호',
    children: mocking,
    errorMessage: '숫자만 입력이 가능합니다',
  },
};
