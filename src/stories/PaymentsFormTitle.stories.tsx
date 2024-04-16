import type { Meta, StoryObj } from '@storybook/react';
import PaymentsFormTitle from '../components/PaymentsFormTitle';

const meta = {
  title: 'PaymentsFormTitle',
  component: PaymentsFormTitle,
} satisfies Meta<typeof PaymentsFormTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    title: '결제할 카드 번호를 입력해 주세요',
    subTitle: '본인 명의의 카드만 결제 가능합니다.',
  },
};

export const ExpirationDate: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    subTitle: '월/년도(MMYY)를 순서대로 입력해 주세요.',
  },
};

export const Name: Story = {
  args: {
    title: '카드 소유자 이름을 입력해 주세요',
    subTitle: '',
  },
};
