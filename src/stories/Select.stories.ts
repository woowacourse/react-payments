import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SelectBox from '../components/SelectBox';
import { CARD_COMPANY_CATEGORIES } from '../constants/cardCompany';

const meta = {
  title: 'SelectBox',
  component: SelectBox,
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockHandleInput = action('handleInput');

export const Default: Story = {
  args: {
    options: CARD_COMPANY_CATEGORIES,
    selectedOption: '카드사를 선택해주세요',
    onChange: mockHandleInput,
  },
};
