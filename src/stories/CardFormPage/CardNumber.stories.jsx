import React, { useContext, useMemo } from "react";
import CardNumber from "components/pages/CardFormPage/CardNumber";
import { CardInfoContext } from "components/context/CardInfoProvider";

export default {
  title: "CardFormPage/CardNumber",
  component: CardNumber,
};

const Template = () => {
  const { cardNumbers } = useContext(CardInfoContext);
  const isCorrectCardNumber = useMemo(
    () => Object.values(cardNumbers).join("").length === 16,
    [cardNumbers]
  );

  return (
    <CardNumber
      cardNumbers={cardNumbers}
      isCorrectCardNumber={isCorrectCardNumber}
    />
  );
};

export const Primary = Template.bind({});
