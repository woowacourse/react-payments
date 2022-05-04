import useModal from "hooks/useModal";
import React from "react";
import { CardInfo } from "types/cardInfo";

import CardSelectModal from "./CardSelectModal";

export default function Card({
  cardInfo,
  shouldShowTypeSelection = false,
}: {
  cardInfo: CardInfo;
  shouldShowTypeSelection?: boolean;
}) {
  const { cardNumbers, expirationDate, userName, cardType } = cardInfo;
  const { isModalOpened, openModal, closeModal } = useModal(true);

  return (
    <>
      <div className="card-box flex-center">
        <div
          className="empty-card flex-column-center"
          style={{ backgroundColor: cardType.color }}
          onClick={openModal}
        >
          <div className="card-top">
            <span className="card-text">{cardType.name}</span>
            <span className="card-text">
              <span className="card-expiration-date">{expirationDate.month || "MM"}</span> /{" "}
              <span className="card-expiration-date">{expirationDate.year || "YY"}</span>
            </span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom flex-column-horizontal-center">
            <div className="card-text card-numbers-text">
              {cardNumbers.map((cardNumber, index) => (
                <span className="card-number" key={index}>
                  {index < 2 ? cardNumber : "•".repeat(cardNumber.length)}
                </span>
              ))}
            </div>
            <span className="card-text card-user-name">{userName || "NAME"}</span>
          </div>
        </div>
      </div>
      {shouldShowTypeSelection && (
        <CardSelectModal isOpened={isModalOpened} closeModal={closeModal} />
      )}
    </>
  );
}
