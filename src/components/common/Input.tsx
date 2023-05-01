import { ChangeEvent, ChangeEventHandler, Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export const cardSerialNumberFormatter = (serialNumber: string) => {
  if (serialNumber.length > 16) throw Error('올바르지 않은 카드 번호입니다.');

  const maskedSerialNumber =
    serialNumber.slice(0, 8) + '●'.repeat(serialNumber.length > 8 ? serialNumber.length - 8 : 0);
  return maskedSerialNumber.match(/.{1,4}/g)?.join('-') || maskedSerialNumber;
};

const Input = ({
  number,
  company,
  setInput,
  onSetModalContents,
  forwardRef,
}: {
  number: string;
  company?: any;
  setInput: (val: string) => void;
  onSetModalContents?: any;
  forwardRef?: any;
}) => {
  const offsetByInputType: Record<string, number> = {
    deleteContentBackward: -1,
    insertText: 1,
  };

  const getOffset = (inputType: string, selectionStart: number) => {
    if (inputType === 'insertText') {
      return selectionStart !== 0 && selectionStart % (4 + 1) === 0 ? offsetByInputType[inputType] : 0;
    }

    if (inputType === 'deleteContentBackward') {
      return selectionStart !== 0 && (selectionStart + 1) % (4 + 1) === 0 ? offsetByInputType[inputType] : 0;
    }

    return 0;
  };

  const currentSerialNumberByInputType: Record<string, any> = {
    deleteContentBackward: (serialIndex: number) => {
      return number.slice(0, serialIndex - 1) + number.slice(serialIndex);
    },
    insertText: (serialIndex: number, insertKey: string) => {
      return number.slice(0, serialIndex) + insertKey + number.slice(serialIndex);
    },
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nativeEvent = event.nativeEvent as Event & { data: number; inputType: string };
    const inputKey = nativeEvent.data;
    const inputValue = event.target.value.replaceAll('-', '');
    const inputType: string = nativeEvent.inputType;

    console.log(inputKey);
    console.log(event.target.selectionStart, event.target.selectionEnd);

    if (
      event.target.selectionStart === 0 &&
      event.target.selectionEnd === event.target.value.length &&
      inputType === 'deleteContentBackward'
    ) {
      event.target.value = '';
    }

    if (isNaN(inputKey)) {
      event.target.value = cardSerialNumberFormatter(number);
      return;
    }

    const selectionStart = event.target.selectionStart;
    const offset = getOffset(inputType, selectionStart!);
    const currentLocation = selectionStart ? selectionStart + offset : offset;

    try {
      const serialIndex =
        currentLocation - Math.floor(currentLocation / (4 + 1)) - offsetByInputType[inputType];
      const currentSerialNumber = currentSerialNumberByInputType[inputType](serialIndex, inputKey);
      const value = cardSerialNumberFormatter(currentSerialNumber);

      event.target.value = value;

      setInput(currentSerialNumber);

      event.target.setSelectionRange(currentLocation, currentLocation);

      if (inputValue.length === 19) {
        return;
      }
    } catch (error) {
      setInput('');
      event.target.value = number;
    }
  };
  return (
    <InputsBoxWrapper>
      <InputStyle onChange={onChange} maxLength={19} align={'center'} />
    </InputsBoxWrapper>
  );
};

export default Input;

const InputsBoxWrapper = styled.div<{ isFullWidth?: boolean; align?: string }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => (align === 'center' ? 'center' : 'flex-start')};
  align-items: center;
  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'min-content')};
  height: 48.75px;
  box-sizing: border-box;

  border: none;
  padding: 0 14px;

  background: #ecebf1;
  border-radius: 7px;

  color: #000000;
  font-size: 20px;
`;
const InputStyle = styled.input<{ align: string }>`
  width: ${({ maxLength }) => maxLength! * 16}px;
  max-width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;

  color: #000000;
  font-size: 16px;
  text-align: ${({ align }) => align};
  outline: none;

  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  letter-spacing: 1.5px;
`;
