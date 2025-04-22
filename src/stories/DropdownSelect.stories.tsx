import type { Meta } from '@storybook/react';
import DropdownSelect from '../components/legacy/DropdownSelect';
import { CARD_COMPANY_NAMES } from '../constants/setting';
import { useState } from 'react';

const meta = {
  title: 'DropdownSelect',
  component: DropdownSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownSelect>;

export default meta;

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <DropdownSelect
      value={value}
      setValue={setValue}
      options={CARD_COMPANY_NAMES}
      placeholder="카드사를 선택해주세요"
    />
  );
};
