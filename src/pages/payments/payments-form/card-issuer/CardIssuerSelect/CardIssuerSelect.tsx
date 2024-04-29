import { Select, SelectProps } from '@components/index';
import { CARD } from '@constants/index';

type CardIssuerSelectProps = Omit<SelectProps, 'placeholder' | 'options' | 'onChange'> & {
  onSelectCardIssuer: React.ChangeEventHandler<HTMLSelectElement>;
};

const CardIssuerSelect: React.FC<CardIssuerSelectProps> = ({ value, onSelectCardIssuer }) => {
  return (
    <Select
      value={value}
      placeholder="카드사를 선택해주세요"
      options={Object.entries(CARD.ISSUER_NAME).map(([value, text]) => ({
        value,
        text,
      }))}
      onChange={onSelectCardIssuer}
    />
  );
};

export default CardIssuerSelect;
