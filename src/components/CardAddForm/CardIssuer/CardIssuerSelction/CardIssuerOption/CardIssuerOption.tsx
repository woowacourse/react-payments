import type { MouseEvent } from "react";
import type { Issuer } from "../../../../../types";
import { CARD_ISSUER_LOGO_IMAGE } from "../../../../../constants/images";
import styles from "./style.module.css";

interface CardIssuerOptionProps {
  issuer: Issuer;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const CardIssuerOption = ({ issuer, onClick }: CardIssuerOptionProps) => {
  return (
    <button
      type="button"
      name="issuer"
      value={issuer}
      className={styles.button}
      onClick={onClick}
    >
      <img src={CARD_ISSUER_LOGO_IMAGE[issuer]} alt={`${issuer} 로고`} />
      <span>{issuer}</span>
    </button>
  );
};

export default CardIssuerOption;
