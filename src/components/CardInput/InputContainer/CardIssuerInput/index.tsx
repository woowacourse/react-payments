import { CARD_ISSUER_FORM_MESSAGE } from '../../../../constants';
import Select from '../../../common/Select';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

interface CardIssuerInputProps {
  cardIssuerError: boolean;
  onCardIssuerChange: (value: string) => void;
  onBlurCardIssuerSelect: () => boolean;
}

function CardIssuerInput({
  cardIssuerError,
  onCardIssuerChange,
  onBlurCardIssuerSelect,
}: CardIssuerInputProps) {
  const { title, subTitle, label, placeholder, options } =
    CARD_ISSUER_FORM_MESSAGE;

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <Select
          options={options}
          placeholder={placeholder}
          isError={cardIssuerError}
          onChange={(event) => onCardIssuerChange(event.target.value)}
          onBlur={onBlurCardIssuerSelect}
        />
      </InputField>
    </InputWrap>
  );
}

export default CardIssuerInput;
