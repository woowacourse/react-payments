import React from "react";
import { LENGTH } from "../../utils";
import Card from "../Card/Card";
import CardShape from "../Card/CardShape";
import Header from "../Header/Header";

const CardListPage = ({ cardInfos, routeToNext }) => {
  return (
    <>
      <Header title={"보유카드"} hasBackButton={false} />
      <section className="flex flex-col h-full items-center">
        {cardInfos.map(({ id, cardInfo }) => (
          <React.Fragment key={id}>
            <Card
              backgroundColor={cardInfo.backgroundColor}
              bank={cardInfo.bank}
              numbers={cardInfo.cardNumbers}
              expirationDate={cardInfo.expirationMonth + "/" + cardInfo.expirationYear}
              ownerName={cardInfo.ownerName.slice(0, LENGTH.OWNER_NAME.CARD_DISPLAY)}
              isRegistered={true}
            />
            <div className="font-medium text-lg mb-3">{cardInfo.nickname}</div>
          </React.Fragment>
        ))}
        <CardShape isRegistered={false} onClick={routeToNext} />
      </section>
    </>
  );
};

export default CardListPage;
