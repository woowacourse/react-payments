import { CARD_PERIOD } from '../../constants/inputInformation';
import { OnChange, PeriodErrorType, PeriodKeys, Validation } from '../../types/cardType';
import { cardPeriodValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';

interface CardPeriodInputPropType {
  error: PeriodErrorType;
  handleOnChange: (validation: Validation) => OnChange;
}

const CardPeriodInput = ({ error, handleOnChange }: CardPeriodInputPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_PERIOD;

  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: PeriodKeys, index: number) => {
        return (
          <Input
            autoFocus={index === 0}
            key={index}
            name={name}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            handleOnChange={handleOnChange(cardPeriodValidated(name))}
            error={error[name]}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardPeriodInput;
