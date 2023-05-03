import type { Meta } from '@storybook/react';

import { CardInfoProvider } from '../../context/CardInfoContext';
import useSwitch from '../../hooks/useSwitch';
import { SelectBank } from '../../components';
import { Modal } from '../../components/portal';

const meta: Meta<typeof SelectBank> = {
  component: SelectBank,
  title: 'Components/SelectBank',
  tags: ['autodocs'],
};

export default meta;

const SelectBankStories = () => {
  const { state, turnOff: closeModal } = useSwitch(true);

  return (
    <>
      {state && (
        <CardInfoProvider>
          <Modal closeModal={closeModal}>
            <SelectBank closeModal={closeModal} />
          </Modal>
        </CardInfoProvider>
      )}
    </>
  );
};

export const Default = () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);

  return <SelectBankStories />;
};
