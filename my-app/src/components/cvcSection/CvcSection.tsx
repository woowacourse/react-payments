import { useId, useRef, useState } from 'react';
import { getCvcError, isInputValidate } from '../../utils/Validation';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const CvcSection = ({ value, setValue }: Props) => {
  const [error, setError] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cvcInputId = useId();
  
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
      htmlFor={cvcInputId}
    >
      <NumberInput
        id={cvcInputId}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="123"
        isError={error}
        maxLength={3}
        ref={inputRef}
      />
    </CommonSection>
  );
};

export default CvcSection;
