import { Modal } from '@suyoungj/react-simple-modal-ts';

import CardCompanyButton from '../CardCompanyButton';
import { CARD_COMPANIES } from '../../domain/constants';
import { useModalContext } from '../../utils/context/ModalContext';

import styles from './cardCompanySelectBottomSheet.module.css';

const CardCompanySelectBottomSheet = () => {
  const { isModalOpen, closeModal } = useModalContext();

  return (
    <Modal isModalOpen={isModalOpen} onCloseModal={closeModal}>
      <div className={styles.container}>
        <div className={styles.companyContainer}>
          {CARD_COMPANIES.map((cardCompany) => (
            <CardCompanyButton key={cardCompany} cardCompany={cardCompany} />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CardCompanySelectBottomSheet;
