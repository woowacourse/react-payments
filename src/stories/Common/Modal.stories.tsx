import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Modal } from '../../components/common/Modal';
import { Button } from '../../components/common/Button/Button';

const meta = {
  title: 'Payments/Common/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryFn<typeof meta>;

export const ModalFrame: Story = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpenModal(true)} width={'100px'} height={'50px'}>
        Open
      </Button>
      <Modal isOpenModal={isOpenModal} closeModal={() => setIsOpenModal(false)} />
    </>
  );
};
