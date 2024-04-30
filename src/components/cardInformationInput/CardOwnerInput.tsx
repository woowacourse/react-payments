import { Dispatch, SetStateAction } from 'react';
import { CARD_OWNER } from '../../constants/inputInformation';
import { OnChange, OwnerErrorType, OwnerKeys, Validation } from '../../types/cardType';
import { cardOwnerValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';

interface CardOwnerInputPropType {
  error: OwnerErrorType;
  handleOnChange: (validation: Validation) => OnChange;
  setBlur?: Dispatch<SetStateAction<boolean>>;
}

const CardOwnerInput = ({ error, handleOnChange, setBlur }: CardOwnerInputPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_OWNER;

  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: OwnerKeys, index: number) => {
        return (
          <Input
            autoFocus={index === 0}
            key={index}
            name={name}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            handleOnChange={handleOnChange(cardOwnerValidated)}
            error={error[name]}
            setBlur={() => setBlur && setBlur(true)}
            setFocus={() => setBlur && setBlur(false)}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardOwnerInput;
