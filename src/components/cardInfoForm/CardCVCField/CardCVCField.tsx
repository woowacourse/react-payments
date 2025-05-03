import { useId } from 'react';
import Input from '../../common/Input/Input';
import LabeledInput from '../../common/LabeledInput/LabeledInput';

interface CardCVCFieldProps {
  cardCVC: string;
  isError: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardCVCField({ isError, cardCVC, onChange }: CardCVCFieldProps) {
  const id = useId();

  return (
    <LabeledInput htmlFor={`CardCVC-${id}`} label="CVC" isMultiple={false}>
      <Input
        isError={isError}
        type="tel"
        name="CardCVC"
        id={`CardCVC-${id}`}
        value={cardCVC}
        aria-labelledby="CardCVC"
        onChange={onChange}
        placeholder="123"
        maxLength={3}
        regexString={/^\d*$/}
        autoFocus={true}
      />
    </LabeledInput>
  );
}

export default CardCVCField;
