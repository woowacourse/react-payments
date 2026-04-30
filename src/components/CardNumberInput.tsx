import { type ComponentProps } from 'react';
import ValidationInput from './ValidationInput';
import { validateNumberString, validateStringLength, validateStringMaxLength } from '../utils';

interface CardNumberInputProps {
  value: [string, string, string, string];
  onChange: ComponentProps<typeof ValidationInput>['onChange'];
}

function CardNumberInput(props: CardNumberInputProps) {
  return (
    <div>
      {props.value.map((el, index) => (
        <ValidationInput
          key={index}
          data-index={index}
          type="text"
          inputMode="numeric"
          placeholder="1234"
          value={el}
          onChange={props.onChange}
          validations={[
            {
              type: 'limit',
              validator: validateNumberString,
              message: '숫자만 입력 가능합니다',
            },
            {
              type: 'limit',
              validator: (input: string) => validateStringMaxLength(input, 4),
              message: '4자리까지만 입력 가능합니다',
            },
            {
              type: 'check',
              validator: (input: string) => validateStringLength(input, 4),
              message: '4자리를 입력하세요',
            },
          ]}
        />
      ))}
    </div>
  );
}

export default CardNumberInput;
