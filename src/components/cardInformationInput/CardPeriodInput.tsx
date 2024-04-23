import { CARD_PERIOD } from '../../constants/inputInformation';
import { PeriodErrorType, PeriodKeys } from '../../types/cardType';
import { cardPeriodValidated } from '../../validations/validateInput';
import Input from '../common/Input';
import InputGroup from '../common/InputGroup';

interface CardPeriodInputPropType {
  setValue: (name: string, value: string) => void;
  error: PeriodErrorType;
  handleError: (name: string, errorMessage: string) => void;
}

const CardPeriodInput = ({ setValue, error, handleError }: CardPeriodInputPropType) => {
  const { names, title, subtitle, label, maxLength, placeholders } = CARD_PERIOD;

  return (
    <InputGroup title={title} subtitle={subtitle} label={label} error={error}>
      {names.map((name: PeriodKeys, index: number) => {
        return (
          <Input
            key={index}
            name={name}
            setValue={setValue}
            placeholder={placeholders[index]}
            maxLength={maxLength}
            validation={cardPeriodValidated(name)}
            error={error[name]}
            handleError={handleError}
          />
        );
      })}
    </InputGroup>
  );
};

export default CardPeriodInput;
