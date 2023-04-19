import type { Meta, StoryObj } from '@storybook/react';

import Input from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    labelText: '카드 번호',
    inputInfoList: [
      {
        type: 'number',
        maxLength: 4,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'number',
        maxLength: 4,
        width: '75px',
        center: true,
        value: '',
        onChange: () => {},
      },
      {
        type: 'number',
        maxLength: 4,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'number',
        maxLength: 4,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
    ],
  },
};

export const CardExpirationDate: Story = {
  args: {
    labelText: '만료일',
    inputInfoList: [
      {
        type: 'number',
        placeholder: 'MM',
        maxLength: 2,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'number',
        placeholder: 'YY',
        maxLength: 2,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
    ],
  },
};

export const CardOwner: Story = {
  args: {
    labelText: '카드 소유자 이름(선택)',
    inputInfoList: [
      {
        type: 'text',
        placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
        maxLength: 30,
        width: '250px',
        value: '',
        center: false,
        onChange: () => {},
      },
    ],
  },
};

export const CardCVC: Story = {
  args: {
    labelText: '보안 코드(CVC/CVV)',
    inputInfoList: [
      {
        type: 'password',
        maxLength: 3,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
    ],
  },
};

export const CardPWD: Story = {
  args: {
    labelText: '카드 비밀번호',
    inputInfoList: [
      {
        type: 'password',
        maxLength: 1,
        width: '40px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'password',
        maxLength: 1,
        width: '40px',
        value: '',
        center: true,
        onChange: () => {},
      },
    ],
  },
};
