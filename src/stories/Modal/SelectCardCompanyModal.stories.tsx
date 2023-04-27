import type { Meta } from '@storybook/react';

import { useState } from 'react';
import { BottomSheet } from '../../components/modal/template/BottomSheet';
import { SelectCardCompanyModal } from '../../components/modal/content/selectCardCompany';
import { COMPANIES } from '../../constants/cardCompany';

const meta = {
  title: 'Example/Modal',
  component: SelectCardCompanyModal,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectCardCompanyModal>;

export default meta;

export const SelectCardCompanyModalStory = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      {isOpen && (
        <BottomSheet setIsOpen={setIsOpen}>
          <SelectCardCompanyModal
            setSelectedCardCompany={() => {}}
            closeModal={() => setIsOpen(false)}
          />
        </BottomSheet>
      )}
    </>
  );
};
