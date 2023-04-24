import CardCompanyButton from '../CardCompany';
import Modal from '../common/Modal';

import { CARD_COMPANIES } from '../../domain/constants';
import { uuid } from '../../utils/uuid';

import styles from './cardCompanySelectBottomSheet.module.css';

const CardCompanySelectBottomSheet = () => {
  return (
    <Modal>
      <div className={styles.container}>
        <div className={styles.companyContainer}>
          {CARD_COMPANIES.map((cardCompany) => (
            <CardCompanyButton key={uuid()} cardCompany={cardCompany} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CardCompanySelectBottomSheet;
