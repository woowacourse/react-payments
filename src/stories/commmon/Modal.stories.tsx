import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProvider, useModalContext } from '@ashleysyheo/react-modal';
import Button from '../../components/common/Button/Button';

const meta = {
  title: 'Payments/Common/Modal',
  component: Modal,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const { isModalOpen, openModal } = useModalContext();

    return (
      <>
        <Button variant="default" onClick={openModal}>
          Open
        </Button>
        {isModalOpen && (
          <Modal>
            <div
              style={{
                position: 'relative',
                left: '50%',
                maxWidth: '500px',
                transform: 'translateX(-50%)',
              }}
            >
              <h2>Anna Karenina</h2>
              <br />
              <p>
                Happy families are all alike; every unhappy family is unhappy in its own way.
                <br />
                Everything was in confusion in the Oblonskys house. The wife had discovered that the
                husband was carrying on an intrigue with a French girl, who had been a governess in
                their family, and she had announced to her husband that she could not go on living
                in the same house with him. This position of affairs had now lasted three days, and
                not only the husband and wife themselves, but all the members of their family and
                household, were painfully conscious of it.
              </p>
            </div>
          </Modal>
        )}
      </>
    );
  },
};
