import styles from './style.module.css';
import { CARD_ISSUERS } from '../../../../constants';
import CardIssuerOption from './CardIssuerOption/CardIssuerOption';

interface CardIssuerSelectionProps {
  onOptionClick: CallableFunction;
}

function CardIssuerSelection({ onOptionClick }: CardIssuerSelectionProps) {
  return (
    <div className={styles.container}>
      {CARD_ISSUERS.map((cardIssuer) => (
        <CardIssuerOption issuer={cardIssuer} onClick={onOptionClick} />
      ))}
    </div>
  );
}

export default CardIssuerSelection;
