import styles from "./CardPreview.module.css";
import { memo } from "react";
import CardPreviewFront from "@/components/CardPreviewFront/CardPreviewFront";
import CardPreviewBack from "@/components/CardPreviewBack/CardPreviewBack";

interface CardPreviewProps {
  cardNumbers: Record<string, string>;
  expirationDate: Record<string, string>;
  ownerName: string;
  cardCompany: string;
  CVC: string;
  face: "front" | "back";
}

const CardPreview = memo(
  ({
    cardNumbers,
    expirationDate,
    ownerName,
    cardCompany,
    CVC,
    face,
  }: CardPreviewProps) => {
    return (
      <div
        className={`${styles.container} ${face === "front" ? styles[cardCompany] : ""}`}
      >
        {face === "front" ? (
          <CardPreviewFront
            cardNumbers={cardNumbers}
            expirationDate={expirationDate}
            ownerName={ownerName}
          />
        ) : (
          <CardPreviewBack CVC={CVC} />
        )}
      </div>
    );
  },
  (prev, next) => {
    if (prev.cardNumbers.first !== next.cardNumbers.first) return false;
    if (prev.cardNumbers.second !== next.cardNumbers.second) return false;
    if (prev.cardNumbers.third !== next.cardNumbers.third) return false;
    if (prev.cardNumbers.fourth !== next.cardNumbers.fourth) return false;

    if (prev.expirationDate.month !== next.expirationDate.month) return false;
    if (prev.expirationDate.year !== next.expirationDate.year) return false;

    if (prev.ownerName !== next.ownerName) return false;

    if (prev.CVC !== next.CVC) return false;
    if (prev.cardCompany !== next.cardCompany) return false;

    if (prev.face !== next.face) return false;

    return true;
  }
);

export default CardPreview;
