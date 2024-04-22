import { CARD_OWNER } from '../../constants/inputInformation';
import { OwnerErrorType, OwnerKeys } from '../../types/cardType';
import { cardOwnerValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';

interface CardOwnerInputPropType {
  setValue: (name: string, value: string) => void;
  error: OwnerErrorType;
  handleError: (name: string, errorMessage: string) => void;
}

const CardOwnerInput = ({ setValue, error, handleError }: CardOwnerInputPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_OWNER;

  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: OwnerKeys, index: number) => {
        return (
          <Input
            key={index}
            name={name}
            setValue={setValue}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            validation={cardOwnerValidated}
            error={error[name]}
            handleError={handleError}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardOwnerInput;
