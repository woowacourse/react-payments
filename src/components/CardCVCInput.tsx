import { type ComponentProps } from 'react';
import ValidationInput from './Common/ValidationInput';
import { validateCVC, validateNumberString, validateStringLength, validateStringMaxLength } from '../utils';
import Flex from './Common/Flex';
import Label from './Common/Label';

type CardCVCInputProps = Pick<ComponentProps<typeof ValidationInput>, 'value' | 'onChange'>;

function CardCVCInput(props: CardCVCInputProps) {
  return (
    <Flex direction="column" gap={10}>
      <Label>CVC</Label>
      <ValidationInput
        {...props}
        type="text"
        inputMode="numeric"
        autoComplete="cc-exp-csc"
        placeholder="CVC"
        isShowError={true}
        validations={[
          {
            type: 'validateOnChange',
            validator: validateNumberString,
            message: '숫자만 입력 가능합니다.',
          },
          {
            type: 'validateOnChange',
            validator: (input: string) => validateStringMaxLength(input, 3),
            message: '3자리까지 입력 가능합니다.',
          },
          {
            type: 'validateOnBlur',
            validator: (input: string) => validateStringLength(input, 3),
            message: '3자리를 입력해주세요.',
          },
          {
            type: 'validateOnBlur',
            validator: validateCVC,
            message: '유효한 CVC를 입력해주세요.',
          },
        ]}
      />
    </Flex>
  );
}

export default CardCVCInput;
