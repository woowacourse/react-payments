import { useId } from 'react';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';
import { useCvc } from './useCvc';

interface Props {
  value: string;
  setValue: (value: string) => void;
  serverError?: string;
}

const CvcSection = ({ value, setValue, serverError }: Props) => {
  const cvcInputId = useId();
  const { error, handleOnChange, handleOnBlur, finalErrorMessage } = useCvc({value, setValue});

  return (
    <CommonSection
      title="CVC 번호를 입력해주세요"
      description=""
      label="CVC"
      errorMessage={serverError || finalErrorMessage}
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
      />
    </CommonSection>
  );
};

export default CvcSection;
