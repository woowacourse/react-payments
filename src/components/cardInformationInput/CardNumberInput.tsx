import { CARD_NUMBER } from '../../constants/inputInformation';
import { CardNumberErrorType, CardNumberKeys } from '../../types/cardType';
import { cardNumberValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';

interface CardNumberInputPropType {
  setValue: (name: string, value: string) => void;
  error: CardNumberErrorType;
  handleError: (name: string, errorMessage: string) => void;
}

const CardNumberInput = ({ setValue, error, handleError }: CardNumberInputPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_NUMBER;

  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: CardNumberKeys, index: number) => {
        const isPassword = name === 'number_3' || name === 'number_4';
        return (
          <Input
            key={index}
            type={isPassword ? 'password' : 'input'}
            name={name}
            setValue={setValue}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            validation={cardNumberValidated}
            error={error[name]}
            handleError={handleError}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardNumberInput;
