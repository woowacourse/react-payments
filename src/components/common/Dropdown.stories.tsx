import { Meta } from '@storybook/react';

import Dropdown from './Dropdown';
import { fn } from '@storybook/test';

const meta = {
  title: 'Dropdown',
  component: Dropdown,

  parameters: {
    layout: 'centered',
  },

  args: {
    value: '',
    options: ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'],
    onSelect: fn(),
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

export const Default = {
  args: {
    value: '',
  },
};
