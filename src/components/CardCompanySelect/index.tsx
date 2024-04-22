import React, { ChangeEvent, useId } from 'react';

import { CARD_COMPANY, CARD_COMPANY_MESSAGE } from '../../constants';
import CardInputContainer from '../CardInputContainer';

import styles from './style.module.css';

interface CardCompanySelectProps {
  editCardCompany: (companyName: string) => void;
}
function CardCompanySelect(props: CardCompanySelectProps) {
  const { editCardCompany } = props;
  const selectId = `card-company-select-${useId()}`;
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    editCardCompany(value);
  };
  return (
    <CardInputContainer
      title={CARD_COMPANY_MESSAGE.title}
      subTitle={CARD_COMPANY_MESSAGE.subTitle}
    >
      <label className="scr-only" htmlFor={selectId}>
        {CARD_COMPANY_MESSAGE.label}
      </label>
      <select
        className={styles.select}
        id={selectId}
        name="company"
        onChange={handleSelectChange}
      >
        {Array.from(CARD_COMPANY).map(([key, value]) => (
          <option key={`option-${key}`} value={key}>
            {value.name}
          </option>
        ))}
      </select>
    </CardInputContainer>
  );
}

export default CardCompanySelect;
