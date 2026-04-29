import type { Meta, StoryObj } from '@storybook/react-vite';

import { FormGroup } from './FormGroup';
import { Input } from '../input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/FormGroup',
  component: FormGroup,
} satisfies Meta<typeof FormGroup>;

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
    title: '결제할 카드 번호를 입력해주세요',
    subTitle: '본인 명의의 카드만 결제 가능합니다.',
    label: '카드 번호',
    chlidren: mocking,
  },
};

export const IsError: Story = {
  args: {
    title: '결제할 카드 번호를 입력해주세요',
    subTitle: '본인 명의의 카드만 결제 가능합니다.',
    label: '카드 번호',
    chlidren: mocking,
    errorMessage: '숫자만 입력이 가능합니다',
  },
};
