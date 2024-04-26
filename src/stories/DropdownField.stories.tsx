/* eslint-disable storybook/prefer-pascal-case */
import { Meta, StoryObj } from '@storybook/react';
import DropdownField from '../components/common/dropdownField/DropdownField';
import Dropdown from '../components/common/dropdown/Dropdown';

const meta = {
  title: 'DropdownField',
  component: DropdownField,
} satisfies Meta<typeof DropdownField>;

export default meta;

type Story = StoryObj<typeof DropdownField>;

export const 카드사_선택_레이아웃: Story = {
  args: {
    title: '카드사를 선택해 주세요',
    subtitle: '현재 국내 카드사만 가능합니다.',
    children: <Dropdown value="" handleChange={() => ''} />,
  },
};
