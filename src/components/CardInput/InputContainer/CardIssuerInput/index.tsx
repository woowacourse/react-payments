import { CARD_ISSUER_FORM_MESSAGE, ERROR_MESSAGE } from '../../../../constants';
import Select from '../../../common/Select';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

interface CardIssuerInputProps {
  cardIssuerError: boolean;
  onCardIssuerChange: (value: string) => void;
  onBlurCardIssuerSelect: () => void;
}

function CardIssuerInput({
  cardIssuerError,
  onCardIssuerChange,
  onBlurCardIssuerSelect,
}: CardIssuerInputProps) {
  const { title, subTitle, label, placeholder, options } =
    CARD_ISSUER_FORM_MESSAGE;

  const getErrorMessage = () => {
    if (!cardIssuerError) {
      return;
    }
    return ERROR_MESSAGE.cardIssuer;
  };

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div className={styles.selectWrap}>
          <Select
            options={options}
            placeholder={placeholder}
            isError={cardIssuerError}
            autoFocus
            onChange={(event) => onCardIssuerChange(event.target.value)}
            onBlur={onBlurCardIssuerSelect}
          />
        </div>
      </InputField>
      <InputErrorMessage errorMessage={getErrorMessage()} />
    </InputWrap>
  );
}

export default CardIssuerInput;
