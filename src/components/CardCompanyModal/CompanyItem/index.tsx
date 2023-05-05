import type { MouseEventHandler } from 'react';

import { COMPANY_INFO, isCompanyName } from '../../../constants/company';
import type { CompanyName } from '../../../constants/company';
import useCardFormAction from '../../../hooks/useCardFormAction';

import styles from './companyItem.module.css';

interface Props {
  name: CompanyName;
  onClose: () => void;
}

const CompanyItem = ({ name, onClose }: Props) => {
  const handleCardInfo = useCardFormAction();

  const handleItemClick: MouseEventHandler<HTMLLIElement> = (event) => {
    const { name } = event.currentTarget.dataset;

    if (!name || !isCompanyName(name)) return;

    handleCardInfo(name, 'company');
    onClose();
  };

  return (
    <li className={styles.item} onClick={handleItemClick} data-name={name}>
      {COMPANY_INFO[name].icon}
      <span className={styles.name}>{name}</span>
    </li>
  );
};

export default CompanyItem;
