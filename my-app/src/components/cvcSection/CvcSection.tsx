import { useRef, useState } from 'react';
import { isInputValidate, isIncompleteRange } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const getCvcError = (cvc: string): string => {
  if (cvc === '') return '';
  if (isIncompleteRange(cvc, 3)) return '필요한 자릿수를 모두 입력해주세요!';

  return '';
}

const CvcSection = ({ value, setValue }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  
  const handleOnChange = (inputValue: string) => {
    if(!isInputValidate(inputValue, 3)) return;

    setValue(inputValue);
  }

  const handleOnBlur = (inputValue: string) => {
    setError(getCvcError(inputValue) !== '');
  }

  const finalErrorMessage = error ? getCvcError(value) : '';

  return (
    <CommonSection
      title="CVC 번호를 입력해주세요"
      description=""
      label="CVC"
      errorMessage={finalErrorMessage}
    >
      <NumberInput
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="123"
        isError={error}
        ref={inputRef}
      />
    </CommonSection>
  );
};

export default CvcSection;
