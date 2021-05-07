import { useEffect } from 'react';
import VirtualKeyboard from '../../components/cardCreation/virtualKeyboard/VirtualKeyboard';
import { INPUT_NAME } from '../../constants/input';
import { useBottomModal, MODAL_TYPE } from '../../hooks/useBottomModal';

const { FIRST, SECOND, THIRD, FOURTH } = INPUT_NAME;

export default {
  title: 'Components/VirtualKeyboard',
  component: VirtualKeyboard,
};

const Template = args => {
  const { openModal, closeModal, BottomModal } = useBottomModal();
  useEffect(() => {
    openModal(MODAL_TYPE.VIRTUAL_KEYBOARD);
  }, [openModal]);
  return <VirtualKeyboard {...args} BottomModal={BottomModal} closeModal={closeModal} />;
};

export const Default = Template.bind({});
Default.args = {
  currentInputName: THIRD,
  inputValue: { [FIRST]: '', [SECOND]: '', [THIRD]: '', [FOURTH]: '' },
  targetKey: 'cardNumber',
  maxLength: 4,
};
