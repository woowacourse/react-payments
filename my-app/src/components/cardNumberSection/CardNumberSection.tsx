import { useId } from 'react';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';
import { useCardNumber } from './useCardNumber';
import { getCardBrand, getCardNumberArrayByBrand } from '../../utils/Validation';

interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

const CardNumberSection = ({ value, setValue }: Props) => {
  const cardNumberIds = useId();
  const { errors, inputRefs, handleOnChange, handleOnBlur, finalErrorMessage } = useCardNumber({value, setValue});
  const currentBrand = getCardBrand(value.join(''));
  const format = getCardNumberArrayByBrand(currentBrand);

  return (
    <CommonSection
      title="결제할 카드 번호를 입력해주세요"
      description="본인 명의의 카드만 결제 가능합니다"
      label="카드 번호"
      errorMessage={finalErrorMessage}
      htmlFor={`${cardNumberIds}-0`}
    >
      {format.map((maxLength, index) => (
        <NumberInput
          key={index}
          id={`${cardNumberIds}-${index}`}
          ref={(el) => {inputRefs.current[index] = el;}}
          value={value[index] || ''}
          onChange={(v) => handleOnChange(v, index)}
          onBlur={(v) => handleOnBlur(v, index)}
          placeholder={"1234"}
          maxLength={maxLength}
          isError={errors[index]}
        />
      ))}
    </CommonSection>
  );
};

export default CardNumberSection;
