import React, { useContext, useState } from "react";

import { cardCompanyList } from "mock";

import {
  CardInfoContext,
  CardInfoDispatchContext,
} from "components/context/CardInfoProvider";

import Card from "components/common/Card";
import CardCompany from "components/common/CardCompany";
import Modal from "components/common/Modal";
import { CardContainer, GridContainer } from "./styled";

interface HandleClickCompanyArgs {
  color: string;
  name: string;
}

function CardShape({ dimensions }) {
  const { cardCompany, cardNumbers, cardDate, owner } =
    useContext(CardInfoContext);
  const cardInfoDispatch = useContext(CardInfoDispatchContext);
  const [isShown, setIsShown] = useState(true);

  const handleClickBox = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  const handleClickCompany = ({
    color: hexColor,
    name,
  }: HandleClickCompanyArgs) => {
    cardInfoDispatch({
      type: "UPDATE_COMPANY",
      cardCompany: { hexColor, name },
    });

    setIsShown((prevIsShown) => !prevIsShown);
  };

  return (
    <CardContainer>
      <div onClick={handleClickBox}>
        <Card
          cardCompany={cardCompany}
          cardNumbers={cardNumbers}
          cardOwner={owner}
          cardDate={cardDate}
        />
      </div>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <GridContainer>
          {cardCompanyList.map(({ color, name }, index) => (
            <CardCompany
              hexColor={color}
              name={name}
              key={index}
              handleClick={() => handleClickCompany({ color, name })}
            />
          ))}
        </GridContainer>
      </Modal>
    </CardContainer>
  );
}

export default CardShape;
