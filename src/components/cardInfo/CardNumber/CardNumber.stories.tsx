import type { Meta, StoryObj } from '@storybook/react';
import CardNumber from './CardNumber';
import Input from '../../common/Input/Input';
import React, { useState } from 'react';

const meta = {
  title: 'CardNumber',
  component: CardNumber,
} satisfies Meta<typeof CardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '결제할 카드 번호 입력',
    description: '본인 명의의 카드만 결제 가능합니다.',
    errorMessage: '',
    children: <></>,
  },
  render: (args) => {
    const [value, setValue] = useState(0);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(Number.parseInt(value, 10));
    };

    return (
      <CardNumber {...args}>
        <Input
          isError={false}
          type="number"
          value={value}
          name="input"
          placeholder="카드번호를 입력하세요"
          onChange={onChange}
        />
      </CardNumber>
    );
  },
};
export const Error: Story = {
  args: {
    title: '결제할 카드 번호 입력',
    description: '본인 명의의 카드만 결제 가능합니다.',
    errorMessage: '카드 번호는 16자리입니다.',
    children: <></>,
  },
  render: (args) => {
    const [value, setValue] = useState(0);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(Number.parseInt(value, 10));
    };

    return (
      <CardNumber {...args}>
        <Input
          isError={true}
          type="number"
          value={value}
          name="input"
          placeholder="카드번호를 입력하세요"
          onChange={onChange}
        />
      </CardNumber>
    );
  },
};
