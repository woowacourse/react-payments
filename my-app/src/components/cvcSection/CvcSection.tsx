import { useId } from 'react';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';
import { useCvc } from './useCvc';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const CvcSection = ({ value, setValue }: Props) => {
  const cvcInputId = useId();
  const { error, inputRef, handleOnChange, handleOnBlur, finalErrorMessage } = useCvc({value, setValue});

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
