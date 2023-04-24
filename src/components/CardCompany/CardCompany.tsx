import styles from './CardCompany.module.css';

type CardCompanyProps = {
  image: string;
  cardName: string;
};

const CardCompany = ({ image, cardName }: CardCompanyProps) => {
  return (
    <article className={styles.cardLogoContainer}>
      <figure>
        <img src={image} alt="cardCompanyLogo" className={styles.cardLogo} />
        <figcaption>{cardName}</figcaption>
      </figure>
    </article>
  );
};

export default CardCompany;
