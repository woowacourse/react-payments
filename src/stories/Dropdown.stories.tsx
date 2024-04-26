/* eslint-disable storybook/prefer-pascal-case */
import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/common/dropdown/Dropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    value: {
      options: {
        BC카드: 'BC카드',
        신한카드: '신한카드',
        카카오뱅크: '카카오뱅크',
        현대카드: '현대카드',
        우리카드: '우리카드',
        롯데카드: '롯데카드',
        하나카드: '하나카드',
        국민카드: '국민카드',
      },
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const 카드사_선택_레이아웃: Story = {
  args: {
    value: '',
  },
};
