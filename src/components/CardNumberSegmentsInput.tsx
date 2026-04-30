import { useState, useEffect, type ChangeEvent } from 'react';
import ValidationInput from './Common/ValidationInput';
import { validateNumberString, validateStringLength, validateStringMaxLength } from '../utils';
import type { CardNumberSegments } from '../types';
import Flex from './Common/Flex';
import Label from './Common/Label';
import InputErrorMessage from './Common/InputErrorMessage';

interface CardNumberSegmentsInputProps {
  value: CardNumberSegments;
  onChange: (value: CardNumberSegments) => void;
}

function CardNumberSegmentsInput(props: CardNumberSegmentsInputProps) {
  const [segments, setSegments] = useState<CardNumberSegments>(props.value);
  const [inputError, setInputError] = useState<Error | null>(null);

  useEffect(() => {
    props.onChange(segments);
  }, [segments]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);
    const newSegments = [...segments] as CardNumberSegments;
    newSegments.splice(inputIndex, 1, event.target.value);
    setSegments(newSegments);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <Flex gap={10}>
        {segments.map((el, index) => (
          <ValidationInput
            key={index}
            data-index={index}
            type="text"
            inputMode="numeric"
            placeholder="1234"
            value={el}
            onChange={handleChange}
            onChangeError={(error) => setInputError(error)}
            validations={[
              {
                type: 'limit',
                validator: validateNumberString,
                message: '숫자만 입력 가능합니다.',
              },
              {
                type: 'limit',
                validator: (input: string) => validateStringMaxLength(input, 4),
                message: '4자리까지만 입력 가능합니다.',
              },
              {
                type: 'check',
                validator: (input: string) => validateStringLength(input, 4),
                message: '4자리를 입력해주세요.',
              },
            ]}
          />
        ))}
      </Flex>
      <InputErrorMessage>{inputError?.message}</InputErrorMessage>
    </Flex>
  );
}

export default CardNumberSegmentsInput;
