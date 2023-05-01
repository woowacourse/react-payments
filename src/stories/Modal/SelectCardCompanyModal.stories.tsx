import type { Meta } from '@storybook/react';

import { BottomSheet } from '../../components/modal/template/BottomSheet';
import { SelectCardCompanyModal } from '../../components/modal/content/selectCardCompany';
import {
  useModalActionContext,
  useModalStateContext,
} from '../../hooks/useModalContext';
import { ModalProvider } from '../../components/providers/ModalProvider';

const meta = {
  title: 'Example/Modal',
  component: SelectCardCompanyModal,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectCardCompanyModal>;

export default meta;

export const SelectCardCompanyModalStory = () => {
  return (
    <ModalProvider>
      <Modal />
    </ModalProvider>
  );
};

const Modal = () => {
  const ModalState = useModalStateContext();
  const { openModal } = useModalActionContext();

  return (
    <>
      <button onClick={openModal}>모달 열기</button>
      {ModalState.isOpen && (
        <BottomSheet>
          <SelectCardCompanyModal />
        </BottomSheet>
      )}
    </>
  );
};
