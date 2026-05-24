import CommonSection from '../../../common/CommonSection/CommonSection';
import NumberInput from '../../../common/NumberInput/NumberInput';
import { CVC_MAX_LENGTH } from '../../../constants/form';
import useFocusOnError from '../../../hooks/useFocusOnError';
import useInitialFocus from '../../../hooks/useInitialFocus';
import useValidatedNumberInput from '../../../hooks/useValidatedNumberInput';
import { getCardCvcError } from '../../../utils/validation';

interface Props {
  value: string;
  updateValue: (value: string) => void;
  serverErrorMessage?: string;
}

export default function CardCvcSection({
  value,
  updateValue,
  serverErrorMessage,
}: Props) {
  const inputRef = useInitialFocus<HTMLInputElement>();
  useFocusOnError(inputRef, serverErrorMessage);

  const { error, errorMessage, handleOnChange, handleOnBlur } =
    useValidatedNumberInput({
      value,
      updateValue,
      validate: getCardCvcError,
      invalidMessage: 'CVC는 숫자만 입력 가능합니다.',
      serverErrorMessage,
    });

  return (
    <CommonSection
      title="CVC 번호를 입력해주세요"
      description=""
      label="CVC"
      errorMessage={errorMessage}
    >
      <NumberInput
        type="text"
        inputRef={inputRef}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        placeholder="123"
        isError={error}
        maxLength={CVC_MAX_LENGTH}
      />
    </CommonSection>
  );
}
