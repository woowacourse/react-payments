import {
  CARD_COMPANY_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../../../constants';
import Select from '../../../common/Select';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

interface CardCompanyInputProps {
  cardCompanyError: boolean;
  onCardCompanyChange: (value: string) => void;
  onBlurCardCompanySelect: () => void;
}

function CardCompanyInput({
  cardCompanyError,
  onCardCompanyChange,
  onBlurCardCompanySelect,
}: CardCompanyInputProps) {
  const { title, subTitle, label, placeholder, options } =
    CARD_COMPANY_FORM_MESSAGE;

  const errorMessage = cardCompanyError ? ERROR_MESSAGE.cardCompany : undefined;

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div className={styles.selectWrap}>
          <Select
            options={options}
            placeholder={placeholder}
            isError={cardCompanyError}
            autoFocus
            onChange={(event) => onCardCompanyChange(event.target.value)}
            onBlur={onBlurCardCompanySelect}
          />
        </div>
      </InputField>
      <InputErrorMessage errorMessage={errorMessage} />
    </InputWrap>
  );
}

export default CardCompanyInput;
