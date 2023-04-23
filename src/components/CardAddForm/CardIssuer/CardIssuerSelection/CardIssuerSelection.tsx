import styles from './style.module.css';
import { MouseEvent } from 'react';
import { CARD_ISSUERS } from '../../../../constants';
import CardIssuerOption from './CardIssuerOption/CardIssuerOption';
import Button from '../../../common/Button/Button';
import CloseIcon from '../../../../assets/x-icon.svg';

interface CardIssuerSelectionProps {
  onOptionClick: (event: MouseEvent<HTMLDivElement>) => void;
  close: () => void;
}

function CardIssuerSelection({ onOptionClick, close }: CardIssuerSelectionProps) {
  return (
    <>
      <div className={styles.header}>
        <h3 className={styles.title}>카드사 선택</h3>
        <Button variant="textButton" size="small" icon={CloseIcon} onClick={close} />
      </div>
      <div className={styles.container}>
        {CARD_ISSUERS.map((cardIssuer, index) => (
          <CardIssuerOption key={index} issuer={cardIssuer} onClick={onOptionClick} />
        ))}
      </div>
    </>
  );
}

export default CardIssuerSelection;
