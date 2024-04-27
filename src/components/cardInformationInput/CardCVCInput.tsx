import { Dispatch, SetStateAction } from 'react';
import { CARD_CVC } from '../../constants/inputInformation';
import { CVCErrorType, CVCKeys, OnChange, Validation } from '../../types/cardType';
import { cardNumberValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';
import { VALIDATION } from '../../constants/validation';
interface CardCVCPropType {
  handleOnChange: (validation: Validation) => OnChange;
  error: CVCErrorType;
  setFocus: Dispatch<SetStateAction<boolean>>;
}

const CardCVCInput = ({ error, setFocus, handleOnChange }: CardCVCPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_CVC;

  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: CVCKeys, index: number) => {
        return (
          <Input
            autoFocus={index === 0}
            setFocus={() => setFocus(true)}
            setBlur={() => setFocus(false)}
            key={index}
            name={name}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            handleOnChange={handleOnChange(cardNumberValidated(VALIDATION.cardCVCCount))}
            error={error[name]}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardCVCInput;
