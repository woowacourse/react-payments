import { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../../components/common/Modal/Modal';
import { PageContainer } from 'components/style/PageContainer';
import { BottomSheet } from 'components/BottomSheet/BottomSheet';
import { useState } from 'react';

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  args: {
    isModalOpen: true,
    closeModal: () => {},
    children: <BottomSheet onClick={() => {}} closeModal={() => {}}></BottomSheet>,
  },
  decorators: [
    (Story) => {
      const [isModalOpen, setIsModalOpen] = useState(true);
      const closeModal = () => {
        setIsModalOpen(false);
      };
      const openModal = () => {
        setIsModalOpen(true);
      };
      return (
        <>
          <button onClick={openModal}>openModal</button>
          <PageContainer>
            <Story
              args={{
                isModalOpen: isModalOpen,
                closeModal: closeModal,
                children: <BottomSheet onClick={() => {}} closeModal={closeModal} />,
              }}
            />
          </PageContainer>
        </>
      );
    },
  ],
};
