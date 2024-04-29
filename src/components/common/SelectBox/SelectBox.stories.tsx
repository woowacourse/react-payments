import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SelectBox from './SelectBox';

import { CARD_BRANDS } from '../../../constants/conditions';

const meta = {
  title: 'SelectBox',
  component: SelectBox,
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  args: {
    optionValues: Object.keys(CARD_BRANDS),
    isValid: true,
    placeholder: '카드사를 선택해주세요.',
    onChange: fn(),
  },
};
