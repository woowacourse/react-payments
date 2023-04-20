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
        minLength: 4,
        maxLength: 4,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'number',
        minLength: 4,
        maxLength: 4,
        width: '75px',
        center: true,
        value: '',
        onChange: () => {},
      },
      {
        type: 'number',
        minLength: 4,
        maxLength: 4,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'number',
        minLength: 4,
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
        minLength: 2,
        maxLength: 2,
        width: '75px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'number',
        placeholder: 'YY',
        minLength: 2,
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
        minLength: 2,
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
        minLength: 3,
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
        minLength: 1,
        maxLength: 1,
        width: '40px',
        value: '',
        center: true,
        onChange: () => {},
      },
      {
        type: 'password',
        minLength: 1,
        maxLength: 1,
        width: '40px',
        value: '',
        center: true,
        onChange: () => {},
      },
    ],
  },
};
