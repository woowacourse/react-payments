import { useId } from 'react';
import Input from '../../common/Input/Input';
import LabeledInput from '../../common/LabeledInput/LabeledInput';

interface CardPasswordFieldProps {
  cardPassword: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardPasswordField({
  isError,
  cardPassword,
  onChange,
}: CardPasswordFieldProps) {
  const id = useId();

  return (
    <LabeledInput
      htmlFor={`cardPassword-${id}`}
      label="비밀번호"
      isMultiple={false}
    >
      <Input
        isError={isError}
        type="password"
        name="cardPassword"
        id={`cardPassword-${id}`}
        value={cardPassword}
        onChange={onChange}
        maxLength={2}
        regexString={/^\d*$/}
        autoFocus={true}
      />
    </LabeledInput>
  );
}

export default CardPasswordField;
