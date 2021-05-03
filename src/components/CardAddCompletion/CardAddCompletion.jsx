import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import { CARD_INFO, LENGTH } from "../../utils";

const CardAddCompletion = ({ cardInfo, onInputChange, submitCardInfo, routeToNext }) => {
  const handleFormSubmit = event => {
    event.preventDefault();

    submitCardInfo();
    routeToNext();
  };

  return (
    <>
      <section className="w-full h-160 flex flex-col justify-center">
        <form onSubmit={handleFormSubmit}>
          <div className="w-full h-full flex flex-col items-center">
            <h1 className="text-2xl mb-24">카드등록이 완료되었습니다.</h1>
            <Card
              scale="scale-150"
              backgroundColor={cardInfo.backgroundColor}
              bank={cardInfo.bank}
              numbers={cardInfo.cardNumbers}
              expirationDate={cardInfo.expirationMonth + "/" + cardInfo.expirationYear}
              ownerName={cardInfo.ownerName.slice(0, LENGTH.OWNER_NAME.CARD_DISPLAY)}
              isRegistered={true}
            />
            <input
              name={CARD_INFO.NICKNAME}
              className=" text-custom-darkgray text-center font-normal text-lg border-b-2 border-custom-gray-250 focus:outline-none mt-16"
              min={LENGTH.NICKNAME.MIN}
              max={LENGTH.NICKNAME.MAX}
              value={cardInfo.nickname}
              onChange={onInputChange}
            />
          </div>
          <div className="flex justify-end items-center w-full h-10">
            <Button name="확인" />
          </div>
        </form>
      </section>
    </>
  );
};

export default CardAddCompletion;
