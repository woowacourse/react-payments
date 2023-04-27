import styles from './CardCompanyModal.module.css';
import cardIcons from '../../images/cardIcon/cardIconImages';
import CardCompany from '../CardCompany/CardCompany';

type CardCompanyModalProps = {
  onClose: () => void;
};

const CardCompanyModal = ({ onClose }: CardCompanyModalProps) => {
  return (
    <>
      <section className={styles.modalBackground} onClick={onClose} />
      <section className={styles.modalContainer}>
        <section className={styles.cardContainer}>
          <CardCompany image={cardIcons.bcCardIcon} cardName="비씨카드" onClose={onClose} />
          <CardCompany image={cardIcons.shinhanCardIcon} cardName="신한카드" onClose={onClose} />
          <CardCompany image={cardIcons.kakaoCardIcon} cardName="카카오뱅크" onClose={onClose} />
          <CardCompany image={cardIcons.hyundaiCardIcon} cardName="현대카드" onClose={onClose} />
        </section>
        <section className={styles.cardContainer}>
          <CardCompany image={cardIcons.wooriCardIcon} cardName="우리카드" onClose={onClose} />
          <CardCompany image={cardIcons.lotteCardIcon} cardName="롯데카드" onClose={onClose} />
          <CardCompany image={cardIcons.hanaCardIcon} cardName="하나카드" onClose={onClose} />
          <CardCompany image={cardIcons.kbCardIcon} cardName="국민카드" onClose={onClose} />
        </section>
      </section>
    </>
  );
};

export default CardCompanyModal;
