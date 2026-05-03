import { useState, type ChangeEvent } from 'react';
import ValidationInput from './Common/ValidationInput';
import { validateNumberString, validateStringLength, validateStringMaxLength, getLastError } from '../utils';
import type { CardNumberSegments, ErrorEntry } from '../types';
import Flex from './Common/Flex';
import Label from './Common/Label';
import InputErrorMessage from './Common/InputErrorMessage';

interface CardNumberSegmentsInputProps {
  value: CardNumberSegments;
  onChange: (value: CardNumberSegments) => void;
}

function CardNumberSegmentsInput(props: CardNumberSegmentsInputProps) {
  const [inputErrors, setInputErrors] = useState<ErrorEntry[]>(
    Array.from({ length: props.value.length }).map(() => null),
  );

  const lastError = getLastError(inputErrors);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);
    const newSegments = [...props.value] as CardNumberSegments;
    newSegments.splice(inputIndex, 1, event.target.value);
    props.onChange(newSegments);
  };

  const handleChangeError = (index: number, error: Error | null) => {
    const newArray = [...inputErrors];
    // eslint-disable-next-line react-hooks/purity
    newArray[index] = error ? { error, timestamp: Date.now() } : null;
    setInputErrors(newArray);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <Flex gap={10}>
        {props.value.map((el, index) => (
          <ValidationInput
            key={index}
            data-index={index}
            type="text"
            inputMode="numeric"
            placeholder="1234"
            value={el}
            onChange={handleChange}
            onChangeError={(error) => handleChangeError(index, error)}
            validations={[
              {
                type: 'onChange',
                validator: validateNumberString,
                message: '숫자만 입력 가능합니다.',
              },
              {
                type: 'onChange',
                validator: (input: string) => validateStringMaxLength(input, 4),
                message: '4자리까지만 입력 가능합니다.',
              },
              {
                type: 'onBlur',
                validator: (input: string) => validateStringLength(input, 4),
                message: '4자리를 입력해주세요.',
              },
            ]}
          />
        ))}
      </Flex>
      {lastError && <InputErrorMessage>{lastError.message}</InputErrorMessage>}
    </Flex>
  );
}

export default CardNumberSegmentsInput;
