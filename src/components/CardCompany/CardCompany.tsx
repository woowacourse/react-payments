import styles from './CardCompany.module.css';
import { useCardInfoContext } from '../../context/CardInfoContext';

type CardCompanyProps = {
  image: string;
  cardName: string;
  onClose: () => void;
};

const CardCompany = ({ image, cardName, onClose }: CardCompanyProps) => {
  const { setSelectedCard } = useCardInfoContext();

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
