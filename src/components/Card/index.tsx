import React, { useState, useContext } from "react";

import Modal from "../Modal";
import { Context } from "../../contexts/store";

export default function Card() {
  const [isModalShow, setIsModalShow] = useState(false);
  const [state, dispatch] = useContext(Context);
  const { cardNumbers, expiredDate, userName } = state;

  const showModal = () => {
    setIsModalShow(true);
  };

  const hideModal = () => {
    setIsModalShow(false);
  };

  const changeCardType = () => {
    dispatch({ type: "CHANGE_CARD_TYPE" });
  };

  const cardType = {
    empty: "empty-card",
    poco: "poco-card",
    jun: "jun-card",
    park: "park-card",
    bran: "bran-card",
    loyd: "loyd-card",
    dobi: "dobi-card",
    colin: "colin-card",
    sun: "sun-card",
  };

  return (
    <>
      <div className="card-box">
        <div className={cardType.empty} onClick={showModal} aria-hidden="true">
          <div className="card-top">
            <span className="card-text"></span>
            <span className="card-text">
              <span className="card-expired-date">{expiredDate.month || "MM"}</span> /{" "}
              <span className="card-expired-date">{expiredDate.year || "YY"}</span>
            </span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-text card-numbers-text">
              {cardNumbers.map((cardNumber, index) => {
                return (
                  <span className="card-number" key={index}>
                    {cardNumber}
                  </span>
                );
              })}
            </div>
            <span className="card-text card-user-name">{userName || "NAME"}</span>
          </div>
        </div>
      </div>
      {isModalShow && <Modal onClose={hideModal} changeCardType={changeCardType} />}
    </>
  );
}
