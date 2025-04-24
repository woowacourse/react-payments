import type { Meta } from '@storybook/react';
import { useState } from 'react';
import DropdownInput from '../../../components/common/DropdownInput';
import { CARD_COMPANY_NAMES } from '../../../constants/setting';

const meta = {
  title: 'Components/common/DropdownInput',
  component: DropdownInput,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownInput>;

export default meta;

export const Default = () => {
  const [value, setValue] = useState('');
  return (
    <DropdownInput
      value={value}
      setValue={setValue}
      options={CARD_COMPANY_NAMES}
      placeholder="카드사를 선택해주세요"
    />
  );
};
