import { MouseEventHandler } from 'react';
import * as Company from '../../../assets/images/company';
import { CompanyName, isCompanyName } from '../../../constants/company';

import styles from './companyItem.module.css';
import useCardFormAction from '../../../hooks/useCardFormAction';

const companyIcons: Record<CompanyName, JSX.Element> = {
  BC카드: <Company.BCIcon width={37} height={37} />,
  신한카드: <Company.ShinhanIcon width={37} height={37} />,
  카카오뱅크: <Company.KakaoBankIcon width={37} height={37} />,
  현대카드: <Company.HyundaiIcon width={37} height={37} />,
  우리카드: <Company.WooriIcon width={37} height={37} />,
  롯데카드: <Company.LotteIcon width={37} height={37} />,
  하나카드: <Company.HanaIcon width={37} height={37} />,
  국민카드: <Company.KBIcon width={37} height={37} />,
};

interface Props {
  name: CompanyName;
  onClose: () => void;
}

const CompanyItem = ({ name, onClose }: Props) => {
  const { setCompany } = useCardFormAction();

  const handleItemClick: MouseEventHandler<HTMLLIElement> = (event) => {
    const { name } = event.currentTarget.dataset;

    if (!name || !isCompanyName(name)) return;

    setCompany(name);
    onClose();
  };

  return (
    <li className={styles.item} onClick={handleItemClick} data-name={name}>
      {companyIcons[name]}
      <span className={styles.name}>{name}</span>
    </li>
  );
};

export default CompanyItem;
