import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Header from "../Header/Header";

const CardConfirm = ({ cardInfo }) => {
  const { backgroundColor, isRegistered, bank, numberInfos, ownerName, expirationDate, onClick } = cardInfo;

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
              {...{ backgroundColor, isRegistered, bank, numberInfos, ownerName, expirationDate, onClick }}
            />

            <input className="mt-16 text-center text-custom-darkgray text-lg font-normal border-b-2 border-custom-gray-250 focus:outline-none" />
          </div>
        </div>
      </section>
      <div className="flex items-center justify-end w-full h-10">
        <Button>확인</Button>
      </div>
    </>
  );
};

CardConfirm.propTypes = {
  cardInfo: PropTypes.shape(Card.propTypes).isRequired,
};

export default CardConfirm;
