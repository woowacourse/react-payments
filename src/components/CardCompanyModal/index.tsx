import { MouseEventHandler } from 'react';

import CompanyItem from './CompanyItem';
import Modal from '../common/Modal';

import { COMPANY_NAMES } from '../../constants/company';

import styles from './cardCompanyModal.module.css';

interface Props {
  onClose: () => void;
}

const CardCompanyModal = ({ onClose }: Props) => {
  const handleCompanyClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <main className={styles.container}>
        <ul className={styles.companyList}>
          {COMPANY_NAMES.map((name) => (
            <CompanyItem key={name} name={name} onClick={handleCompanyClick} />
          ))}
        </ul>
      </main>
    </Modal>
  );
};

export default CardCompanyModal;
