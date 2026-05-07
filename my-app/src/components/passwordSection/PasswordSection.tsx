import { useId } from 'react';
import CommonSection from '../common/commonSection/CommonSection';
import NumberInput from '../common/numberInput/NumberInput';
import { usePassword } from './usePassword';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

const PasswordSection = ({ value, setValue }: Props) => {
  const passwordId = useId();
  const { error, handleOnChange, handleOnBlur, finalErrorMessage } =
    usePassword({ value, setValue });

  return (
    <CommonSection
      title="비밀번호를 입력해 주세요"
      description="앞의 2자리를 입력해주세요"
      label="비밀번호 앞 2자리"
      errorMessage={finalErrorMessage}
      htmlFor={passwordId}
    >
      <NumberInput
        id={passwordId}
        type="password"
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="**"
        isError={error}
        maxLength={2}
      />
    </CommonSection>
  );
};

export default PasswordSection;
