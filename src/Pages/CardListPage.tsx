import React from "react";
import styled from "styled-components";

import { CardPreview } from "components";
import PageHeader from "containers/PageHeader";
import useLocalStorage from "useLocalStorage";
import { PAGE_NAME } from "utils/constants";
import { CardInfoStateTypeInterface } from "context/CardInfoContext";
import { PageType } from "App";

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  margin: 50px auto;
`;

const CardItem = styled.div`
  width: 80%;
  margin: auto;
`;

const CardNickname = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const CardShapeButton = styled.div`
  margin: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 213px;
  height: 133px;

  background-color: #d2d2d2;
  border-radius: 5px;

  font-size: 30px;
  color: #575757;

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #00caa5;
  }
`;

const DEFAULT_CARD_NAME = "Woowa Card";
const initialCardInfoArray: CardInfoStateTypeInterface[] = [];

export default function CardListPage({
  setPage,
}: {
  setPage: React.Dispatch<React.SetStateAction<PageType>>;
}) {
  const [formDataArray] = useLocalStorage("card-info", initialCardInfoArray);

  const parseCardInfo = (card: CardInfoStateTypeInterface) => {
    const cardNumberArray: string[] = [
      card["cardNumber1"],
      card["cardNumber2"],
      card["cardNumber3"],
      card["cardNumber4"],
    ];
    const expireDateArray: string[] = [
      card["expireDate1"],
      card["expireDate2"],
    ];

    const cardInfo = {
      cardNumber: cardNumberArray,
      expireDate: expireDateArray,
      holderName: card["holderName"],
    };

    const colorIndex = Number(card["cardNumber4"]) % 5;

    return { cardInfo, colorIndex };
  };

  return (
    <>
      <PageHeader page={PAGE_NAME.CARD_LIST} />
      <CardList>
        {formDataArray.map((card) => {
          const { colorIndex } = parseCardInfo(card);

          return (
            <CardItem key={card.nickname}>
              <CardPreview color={colorIndex} />
              <CardNickname>{card.nickname || DEFAULT_CARD_NAME}</CardNickname>
            </CardItem>
          );
        })}
        <CardShapeButton
          role={"button"}
          onClick={() => setPage(PAGE_NAME.CARD_ADD)}
        >
          +
        </CardShapeButton>
      </CardList>
    </>
  );
}
