import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../../components';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CardNumbersText: Story = {
  args: {
    type: 'text',
    maxLength: 4,
    center: true,
  },
};

export const CardNumbersPassword: Story = {
  args: {
    type: 'text',
    maxLength: 4,
    center: true,
  },
};

export const ExpirationMonth: Story = {
  args: {
    type: 'text',
    maxLength: 2,
    center: true,
    placeholder: 'MM',
  },
};

export const ExpirationYear: Story = {
  args: {
    type: 'text',
    maxLength: 2,
    center: true,
    placeholder: 'YY',
  },
};

export const OwnerName: Story = {
  args: {
    name: 'ownerName',
    type: 'text',
    maxLength: 30,
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  },
};

export const SecurityNumbers: Story = {
  args: {
    type: 'password',
    maxLength: 3,
    center: true,
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    maxLength: 1,
    center: true,
  },
};

export const Nickname: Story = {
  args: {
    name: 'nickname',
    type: 'text',
    maxLength: 8,
    center: true,
  },
};
