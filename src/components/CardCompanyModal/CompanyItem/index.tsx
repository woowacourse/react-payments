import type { MouseEventHandler } from 'react';
import { useModalContext } from 'react-modal-hp';

import { COMPANY_INFO, isCompanyName } from '../../../constants/company';
import type { CompanyName } from '../../../constants/company';
import useCardFormAction from '../../../hooks/useCardFormAction';

import styles from './companyItem.module.css';

interface Props {
  name: CompanyName;
}

const CompanyItem = ({ name }: Props) => {
  const handleCardInfo = useCardFormAction();
  const { close } = useModalContext();

  const handleItemClick: MouseEventHandler<HTMLLIElement> = (event) => {
    const { name } = event.currentTarget.dataset;

    if (!name || !isCompanyName(name)) return;

    handleCardInfo(name, 'company');
    close();
  };

  return (
    <li className={styles.item} onClick={handleItemClick} data-name={name}>
      {COMPANY_INFO[name].icon}
      <span className={styles.name}>{name}</span>
    </li>
  );
};

export default CompanyItem;
