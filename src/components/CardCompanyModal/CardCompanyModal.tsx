import styles from './CardCompanyModal.module.css';
import cardIcons from '../../images/cardIcon/cardIconImages';
import CardCompany from '../CardCompany/CardCompany';

type CardCompanyModalProps = {
  onClose: () => void;
};

const cardCompanies = [
  { icon: cardIcons.bcCardIcon, name: '비씨카드', id: 1 },
  { icon: cardIcons.shinhanCardIcon, name: '신한카드', id: 2 },
  { icon: cardIcons.kakaoCardIcon, name: '카카오뱅크', id: 3 },
  { icon: cardIcons.hyundaiCardIcon, name: '현대카드', id: 4 },
  { icon: cardIcons.wooriCardIcon, name: '우리카드', id: 5 },
  { icon: cardIcons.lotteCardIcon, name: '롯데카드', id: 6 },
  { icon: cardIcons.hanaCardIcon, name: '하나카드', id: 7 },
  { icon: cardIcons.kbCardIcon, name: '국민카드', id: 8 },
];

const CardCompanyModal = ({ onClose }: CardCompanyModalProps) => {
  return (
    <>
      <section className={styles.modalBackground} onClick={onClose} />
      <section className={styles.modalContainer}>
        {cardCompanies.map(cardCompany => (
          <CardCompany key={cardCompany.id} image={cardCompany.icon} cardName={cardCompany.name} onClose={onClose} />
        ))}
      </section>
    </>
  );
};

export default CardCompanyModal;
