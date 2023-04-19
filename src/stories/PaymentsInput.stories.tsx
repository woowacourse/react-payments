import PaymentsInput from '../components/PaymentsInput';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof PaymentsInput>;

const meta: Meta<typeof PaymentsInput> = {
  title: 'PaymentsInput',
  component: PaymentsInput,
};

export default meta;

export const CardNumber: Story = {
  args: {
    title: '카드 번호',
    inputInformationList: [
      { type: 'text', isRequired: true, maxLength: 4 },
      { type: 'text', isRequired: true, maxLength: 4 },
      { type: 'password', isRequired: true, maxLength: 4 },
      { type: 'password', isRequired: true, maxLength: 4 },
    ],
    inputDivideLetter: '-',
  },
};

export const ExpirationDate: Story = {
  args: {
    title: '만료일',
    inputInformationList: [
      { type: 'text', isRequired: true, maxLength: 2 },
      { type: 'text', isRequired: true, maxLength: 2 },
    ],
    inputDivideLetter: '/',
  },
};

export const CardOwner: Story = {
  args: { title: '카드 소유자 이름(선택)', inputInformationList: [{ type: 'text', isRequired: false, maxLength: 30 }] },
};

export const SecurityCode: Story = {
  args: {
    title: '보언 코드(CVC/CVV)',
    inputInformationList: [{ type: 'password', isRequired: true, maxLength: 3 }],
  },
};

export const CardPassword: Story = {
  args: {
    title: '카드 비밀번호',
    inputInformationList: [
      { type: 'password', isRequired: true, maxLength: 1 },
      { type: 'password', isRequired: true, maxLength: 1 },
    ],
    inputDivideLetter: '',
  },
};
