import type { Meta } from '@storybook/react';
import Modal from '../../components/common/Modal/Modal';

const meta = {
  title: 'Payments/Common/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = () => (
  <Modal isOpen={true} close={() => {}}>
    <div>Modal Content</div>
  </Modal>
);
