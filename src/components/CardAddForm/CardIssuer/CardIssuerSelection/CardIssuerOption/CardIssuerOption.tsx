import styles from './style.module.css';
import { Issuer } from '../../../../../types';
import { CARD_ISSUER_LOGO_IMAGE } from '../../../../../constants/images';

interface CardIssuerOptionProps {
  issuer: Issuer;
  onClick: CallableFunction;
}

function CardIssuerOption({ issuer, onClick }: CardIssuerOptionProps) {
  return (
    <div className={styles.container} onClick={() => onClick(issuer)}>
      <img src={CARD_ISSUER_LOGO_IMAGE[issuer]} alt={`${issuer} 로고`}></img>
      <caption>{issuer}</caption>
    </div>
  );
}

export default CardIssuerOption;
