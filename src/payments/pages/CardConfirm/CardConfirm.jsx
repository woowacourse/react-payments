import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const CardConfirm = ({ cardInfo, onConfirmClick }) => {
  const { bank, backgroundColor, cardNumbers, expirationDate, ownerName, onClick } = cardInfo;

  return (
    <>
      <Header hasBackButton={false} />
      <section className="flex flex-col justify-center w-full h-160">
        <div>
          <div className="flex flex-col items-center w-full h-full">
            <h1 className="mb-24 text-2xl">카드등록이 완료되었습니다.</h1>
            <Card
              isRegistered
              scale="scale-150"
              {...{ bank, backgroundColor, cardNumbers, expirationDate, ownerName, onClick }}
            />

            <input className="mt-16 text-center text-custom-darkgray text-lg font-normal border-b-2 border-custom-gray-250 focus:outline-none" />
          </div>
        </div>
      </section>
      <div className="flex items-center justify-end w-full h-10">
        <Button onClick={onConfirmClick}>확인</Button>
      </div>
    </>
  );
};

CardConfirm.propTypes = {
  cardInfo: PropTypes.shape(Card.propTypes).isRequired,
  onConfirmClick: PropTypes.func.isRequired,
};

export default CardConfirm;
