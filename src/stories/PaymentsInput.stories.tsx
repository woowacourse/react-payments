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
      { type: 'text', isRequired: true, pattern: [4, 4], name: 'cardNumber' },
      { type: 'text', isRequired: true, pattern: [4, 4], name: 'cardNumber' },
      { type: 'password', isRequired: true, pattern: [4, 4], name: 'cardNumber' },
      { type: 'password', isRequired: true, pattern: [4, 4], name: 'cardNumber' },
    ],
    inputDivideLetter: '-',
  },
};

export const ExpirationDate: Story = {
  args: {
    title: '만료일',
    inputInformationList: [
      { type: 'text', isRequired: true, pattern: [2, 2], name: 'expirationDate' },
      { type: 'text', isRequired: true, pattern: [2, 2], name: 'expirationDate' },
    ],
    inputDivideLetter: '/',
  },
};

export const CardOwner: Story = {
  args: {
    title: '카드 소유자 이름(선택)',
    inputInformationList: [{ type: 'text', isRequired: false, pattern: [0, 30], name: 'owner' }],
  },
};

export const SecurityCode: Story = {
  args: {
    title: '보언 코드(CVC/CVV)',
    inputInformationList: [{ type: 'password', isRequired: true, pattern: [3, 3], name: 'securityCode' }],
  },
};

export const CardPassword: Story = {
  args: {
    title: '카드 비밀번호',
    inputInformationList: [
      { type: 'password', isRequired: true, pattern: [1, 1], name: 'cardPassword' },
      { type: 'password', isRequired: true, pattern: [1, 1], name: 'cardPassword' },
    ],
    inputDivideLetter: '',
  },
};
