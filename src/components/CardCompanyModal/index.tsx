import Modal from '../common/Modal';
import CompanyItem from './CompanyItem';

import { COMPANY_NAMES } from '../../constants/company';
import useTimeout from '../../hooks/useTimeout';

import styles from './cardCompanyModal.module.css';

interface Props {
  onClose: () => void;
}

const CardCompanyModal = ({ onClose }: Props) => {
  const [setClose, , isCloseReady] = useTimeout(onClose, 200);

  return (
    <Modal onClose={setClose}>
      <main
        className={`${styles.container} ${isCloseReady ? styles.close : ''}`}
      >
        <ul className={styles.companyList}>
          {COMPANY_NAMES.map((name) => (
            <CompanyItem key={name} name={name} onClose={setClose} />
          ))}
        </ul>
      </main>
    </Modal>
  );
};

export default CardCompanyModal;
