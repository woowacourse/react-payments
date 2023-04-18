import PaymentsInput from '../components/PaymentsInput';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof PaymentsInput>;

const meta: Meta<typeof PaymentsInput> = {
  title: 'PaymentsInput',
  component: PaymentsInput,
};

export default meta;

export const CardNumber: Story = { args: { title: '카드 번호', inputAmount: 4, maxLength: 4, inputDivideLetter: '-' } };

export const ExpirationDate: Story = {
  args: { title: '만료일', inputAmount: 2, maxLength: 2, inputDivideLetter: '/' },
};

export const CardOwner: Story = {
  args: { title: '카드 소유자 이름(선택)', inputAmount: 1, maxLength: 30, inputDivideLetter: null },
};

export const SecurityCode: Story = {
  args: { title: '보언 코드(CVC/CVV)', inputAmount: 1, maxLength: 3, inputDivideLetter: null },
};

export const CardPassword: Story = {
  args: { title: '카드 비밀번호', inputAmount: 2, maxLength: 1, inputDivideLetter: '' },
};
