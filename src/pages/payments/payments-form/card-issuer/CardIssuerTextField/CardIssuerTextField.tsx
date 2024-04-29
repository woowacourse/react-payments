import { TextField } from '@components/index';
import CardIssuerSelect from '../CardIssuerSelect/CardIssuerSelect';

export interface CardIssuerTextFieldProps {
  cardIssuer: string;
  onSelectCardIssuer: (value: string) => void;
}

const CardIssuerTextField: React.FC<CardIssuerTextFieldProps> = ({ cardIssuer, onSelectCardIssuer }) => {
  return (
    <section>
      <TextField.Title title="카드사를 선택해주세요" />
      <TextField.SubTitle subTitle="현재 국내 카드사만 가능합니다." />
      <TextField.Content>
        <CardIssuerSelect
          value={cardIssuer}
          onSelectCardIssuer={(event) => {
            onSelectCardIssuer(event.target.value);
          }}
        />
      </TextField.Content>
    </section>
  );
};

export default CardIssuerTextField;
