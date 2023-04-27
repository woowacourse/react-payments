import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';

const meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

export const ModalFrame = () => {
  const [isOpen, setIsOpen] = useState(true);

  return <Modal isOpen={isOpen} setIsOpen={setIsOpen} />;
};
