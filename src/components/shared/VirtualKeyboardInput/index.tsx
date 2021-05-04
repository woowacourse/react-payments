import { ChangeEvent, FocusEvent, forwardRef, MouseEvent, useEffect, useRef, useState, VFC } from 'react';
import Input from '../Input';
import VirtualKeyboardModal from './VirtualKeyboardModal';

interface Props {
  type?: string;
  maxLength?: number;
  textCenter?: boolean;
  width?: string;
  value: string;
  onChange: (value: string) => void;
}

const VirtualKeyboardNumberInput = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, type, textCenter, maxLength, width }, ref) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const onFocusInput = () => {
      console.log('ho');
      setIsModalVisible(true);
    };

    const onBlurInput = () => {
      console.log('hi');
      setIsModalVisible(false);
    };

    const closeModal = () => {
      setIsModalVisible(false);
    };

    useEffect(() => {
      if (value.length !== maxLength) return;
      closeModal();
    }, [value]);

    return (
      <>
        <Input
          ref={ref}
          width={width}
          textCenter={textCenter}
          maxLength={maxLength}
          type={type}
          inputMode="text"
          onFocus={onFocusInput}
          value={value}
          readOnly
        />
        {isModalVisible && <VirtualKeyboardModal value={value} onChange={onChange} modalClose={() => closeModal()} />}
      </>
    );
  }
);

export default VirtualKeyboardNumberInput;
