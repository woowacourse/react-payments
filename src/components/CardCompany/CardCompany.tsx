import styles from './CardCompany.module.css';
import { useCardStore } from '../../hook/useCardState';

type CardCompanyProps = {
  image: string;
  cardName: string;
  onClose: () => void;
};

const CardCompany = ({ image, cardName, onClose }: CardCompanyProps) => {
  const { setSelectedCard } = useCardStore();

  const handleClick = () => {
    setSelectedCard(cardName);
    onClose();
  };

  return (
    <article className={styles.cardLogoContainer} onClick={handleClick}>
      <figure className={styles.cardCompanyLogo}>
        <img src={image} alt="cardCompanyLogo" className={styles.cardLogo} />
        <figcaption>{cardName}</figcaption>
      </figure>
    </article>
  );
};

export default CardCompany;
