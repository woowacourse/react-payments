import type { Meta, StoryObj } from '@storybook/react';

import TextField from '../components/TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    id: 'card-number',
    label: '카드 번호',
    size: 'small',
    type: 'text',
    maxLength: 16,
    required: true,
  },
};

export const ExpirationDate: Story = {
  args: {
    id: 'expiration-date',
    label: '만료일',
    size: 'medium',
    type: 'text',
    maxLength: 4,
    required: true,
  },
};

export const OwnerName: Story = {
  args: {
    id: 'owner-name',
    label: '카드 소유자 이름 (선택)',
    size: 'large',
    type: 'text',
    maxLength: 30,
    required: false,
  },
};

export const SecurityCode: Story = {
  args: {
    id: 'security-code',
    label: '보안 코드(CVC/CVV)',
    size: 'small',
    type: 'password',
    maxLength: 3,
    required: true,
  },
};

export const CardPassword: Story = {
  args: {
    id: 'card-password',
    label: '카드 비밀번호',
    size: 'x-small',
    type: 'password',
    maxLength: 1,
    required: true,
  },
};
