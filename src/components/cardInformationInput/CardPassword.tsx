import { CARD_PASSWORD } from '../../constants/inputInformation';
import { VALIDATION } from '../../constants/validation';
import { OnChange, PasswordErrorType, PasswordKeys, Validation } from '../../types/cardType';
import { cardNumberValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';
interface CardPasswordPropType {
  error: PasswordErrorType;
  handleOnChange: (validation: Validation) => OnChange;
}
const CardPassword = ({ error, handleOnChange }: CardPasswordPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_PASSWORD;
  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: PasswordKeys, index: number) => {
        return (
          <Input
            autoFocus={index === 0}
            key={index}
            name={name}
            type="password"
            handleOnChange={handleOnChange(cardNumberValidated(VALIDATION.cardPasswordCount))}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            error={error[name]}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardPassword;
