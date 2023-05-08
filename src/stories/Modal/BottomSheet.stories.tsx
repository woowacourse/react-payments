import {
  BottomSheet,
  ModalProvider,
  useModalActionContext,
  useModalStateContext,
} from '@kyw0716/woowacourse-scent-modal';
import type { Meta } from '@storybook/react';

const meta = {
  title: 'Example/Modal',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;

export const BottomSheetStory = () => {
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
    <div>
      <button onClick={openModal}>모달 열기</button>
      {ModalState.isOpen && <BottomSheet>{}</BottomSheet>}
    </div>
  );
};
