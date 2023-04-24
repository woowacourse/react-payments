import styles from './CardCompanyModal.module.css';
import cards from '../../images/images';
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
          <CardCompany image={cards.bcCard} cardName="BC카드" />
          <CardCompany image={cards.hanaCard} cardName="하나카드" />
          <CardCompany image={cards.hyundaiCard} cardName="현대카드" />
          <CardCompany image={cards.citiCard} cardName="씨티카드" />
        </section>
        <section className={styles.cardContainer}>
          <CardCompany image={cards.lotteCard} cardName="롯데카드" />
          <CardCompany image={cards.wooriCard} cardName="우리카드" />
          <CardCompany image={cards.shinhanCard} cardName="신한카드" />
          <CardCompany image={cards.visaCard} cardName="비자카드" />
        </section>
      </section>
    </>
  );
};

export default CardCompanyModal;
