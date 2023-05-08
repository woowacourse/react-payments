import type { Meta } from '@storybook/react';

import { SelectCardCompanyModal } from '../../components/selectCardCompany';
import {
  BottomSheet,
  ModalProvider,
  useModalActionContext,
  useModalStateContext,
} from '@kyw0716/woowacourse-scent-modal';

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
