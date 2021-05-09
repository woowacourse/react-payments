import { useEffect, useRef, useState } from 'react';
import { Input } from '../../../../components';
import { CARD } from '../../../../constants';
import ValidationError from '../../../../error/ValidationError';
import { cardSerialNumberFormatter } from '../../../../utils/formatter';

export default function SerialNumber({
  cardCompany,
  setCardCompany,
  serialNumber,
  setSerialNumber,
  setModalContents,
}) {
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState('');

  const serialNumberInputElement = useRef(null);

  useEffect(() => {
    serialNumberInputElement.current.focus();
  }, [cardCompany]);

  const offsetByInputType = {
    deleteContentBackward: -1,
    insertText: 1,
  };

  const getOffset = (inputType, selectionStart) => {
    if (inputType === 'insertText') {
      return selectionStart !== 0 && selectionStart % (CARD.SERIAL_NUMBER_UNIT_LENGTH + 1) === 0
        ? offsetByInputType[inputType]
        : 0;
    }

    if (inputType === 'deleteContentBackward') {
      return selectionStart !== 0 &&
        (selectionStart + 1) % (CARD.SERIAL_NUMBER_UNIT_LENGTH + 1) === 0
        ? offsetByInputType[inputType]
        : 0;
    }

    return 0;
  };

  const getCurrentSerialNumber = {
    deleteContentBackward: (serialIndex) => {
      return serialNumber.slice(0, serialIndex - 1) + serialNumber.slice(serialIndex);
    },
    insertText: (serialIndex, insertKey) => {
      return serialNumber.slice(0, serialIndex) + insertKey + serialNumber.slice(serialIndex);
    },
    insertFromPaste: () => {
      throw new ValidationError('붙여 넣기는 할 수 없습니다.');
    },
  };

  const onSerialNumberInputChange = (event) => {
    const inputKey = event.nativeEvent.data;
    const inputValue = event.target.value.replaceAll('-', '');

    if (isNaN(inputKey)) {
      event.target.value = cardSerialNumberFormatter(serialNumber);
      return;
    }

    const inputType = event.nativeEvent.inputType;
    const selectionStart = event.target.selectionStart;
    const offset = getOffset(inputType, selectionStart);
    const currentLocation = selectionStart + offset;

    try {
      const serialIndex =
        currentLocation -
        Math.floor(currentLocation / (CARD.SERIAL_NUMBER_UNIT_LENGTH + 1)) -
        offsetByInputType[inputType];
      const currentSerialNumber = getCurrentSerialNumber[inputType](serialIndex, inputKey);

      const value = cardSerialNumberFormatter(currentSerialNumber);

      event.target.value = value;
      setSerialNumber(currentSerialNumber);
      setCardNumberErrorMessage('');

      event.target.setSelectionRange(currentLocation, currentLocation);

      if (inputValue.length === CARD.SERIAL_ID_CODE_LENGTH) {
        serialNumberInputElement.current.blur();
        setModalContents('cardSelection');
      }

      if (cardCompany && inputValue.length < CARD.SERIAL_ID_CODE_LENGTH) {
        setCardCompany('');
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        setSerialNumber('');
        event.target.value = '';
        setCardNumberErrorMessage(error.message);
      }

      console.error(error.message);
    }
  };

  return (
    <Input
      id="card-number"
      type="tel"
      label="카드번호"
      inputStyle={{ width: '100%' }}
      maxLength="19"
      onChange={onSerialNumberInputChange}
      onFocus={() => {
        if (!cardCompany && serialNumber.length === CARD.SERIAL_ID_CODE_LENGTH) {
          serialNumberInputElement.current.blur();
          setModalContents('cardSelection');
        }
      }}
      ref={serialNumberInputElement}
      inputMode="numeric"
      textAlign="center"
      errorMessage={cardNumberErrorMessage}
    />
  );
}
