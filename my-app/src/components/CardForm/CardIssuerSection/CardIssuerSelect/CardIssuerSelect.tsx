import {
  CARD_ISSUERS,
  isCardIssuerCode,
  type SelectedCardIssuerCode,
} from '../../../../constants/cardIssuer';
import { StyledOption, StyledSelect } from './CardIssuerSelect.styles';

interface Props {
  value: SelectedCardIssuerCode;
  onChange: (selectValue: SelectedCardIssuerCode) => void;
  inputRef?: React.Ref<HTMLSelectElement>;
}

function CardIssuerSelect({ value, onChange, inputRef }: Props) {
  return (
    <StyledSelect
      ref={inputRef}
      value={value}
      onChange={(e) => {
        const selectValue = e.target.value;
        onChange(isCardIssuerCode(selectValue) ? selectValue : '');
      }}
      name="cardIssuer"
      isInitial={value === ''}
    >
      <StyledOption value="" hidden>
        카드사를 선택해주세요
      </StyledOption>
      {CARD_ISSUERS.map((issuer) => (
        <StyledOption key={issuer.code} value={issuer.code}>
          {issuer.name}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

export default CardIssuerSelect;
