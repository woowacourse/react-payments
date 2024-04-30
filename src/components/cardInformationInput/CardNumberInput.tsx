import { CARD_NUMBER } from '../../constants/inputInformation';
import { VALIDATION } from '../../constants/validation';
import { CardNumberErrorType, CardNumberKeys, OnChange, Validation } from '../../types/cardType';
import { cardNumberValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';

interface CardNumberInputPropType {
  error: CardNumberErrorType;
  handleOnChange: (validation: Validation) => OnChange;
}

const CardNumberInput = ({ error, handleOnChange }: CardNumberInputPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_NUMBER;

  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: CardNumberKeys, index: number) => {
        const isPassword = name === 'number_3' || name === 'number_4';
        return (
          <Input
            autoFocus={index === 0}
            key={index}
            type={isPassword ? 'password' : 'input'}
            name={name}
            handleOnChange={handleOnChange(cardNumberValidated(VALIDATION.cardNumberCount))}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            error={error[name]}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardNumberInput;
