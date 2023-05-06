import CompanyItem from './CompanyItem';

import { COMPANY_NAMES } from '../../constants/company';

import styles from './cardCompanyModal.module.css';

const CardCompanyModal = () => {
  return (
    <ul className={styles.companyList}>
      {COMPANY_NAMES.map((name) => (
        <CompanyItem key={name} name={name} />
      ))}
    </ul>
  );
};

export default CardCompanyModal;
