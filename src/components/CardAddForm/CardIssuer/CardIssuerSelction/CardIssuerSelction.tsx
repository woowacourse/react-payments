import type { MouseEvent } from "react";
import { CARD_ISSUERS } from "../../../../constants";
import Button from "../../../common/Button/Button";
import CardIssuerOption from "./CardIssuerOption/CardIssuerOption";
import CloseIcon from "../../../../assets/x-icon.svg";
import styles from "./style.module.css";

interface CardIssuerSelectionProps {
  onOptionClick: (event: MouseEvent<HTMLButtonElement>) => void;
  close: () => void;
}

const CardIssuerSelection = ({
  onOptionClick,
  close,
}: CardIssuerSelectionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>카드사 선택</h3>
        <Button
          variant="textButton"
          size="small"
          icon={CloseIcon}
          onClick={close}
        />
      </div>
      <div className={styles.issuerContainer}>
        {CARD_ISSUERS.map((cardIssuer) => (
          <CardIssuerOption
            key={cardIssuer}
            issuer={cardIssuer}
            onClick={onOptionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CardIssuerSelection;
