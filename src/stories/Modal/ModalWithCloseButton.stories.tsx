import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { ModalWithCloseButton } from '../../components/Modal/ModalWithCloseButton';
import { CARD_SELECT_COMPLETE_BUTTON } from '../../constants';

const meta = {
  title: 'Example/Modal',
  component: ModalWithCloseButton,
  tags: ['autodocs'],
} satisfies Meta<typeof ModalWithCloseButton>;

export default meta;

export const ModalFrame = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ModalWithCloseButton
      isOpen={isOpen}
      buttonText={CARD_SELECT_COMPLETE_BUTTON}
      setIsOpen={setIsOpen}
    />
  );
};
