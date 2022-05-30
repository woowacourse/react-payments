import React, { useContext } from "react";
import CardSecurityCode from "components/pages/CardFormPage/CardSecurityCode";
import { CardInfoContext } from "components/context/CardInfoProvider";

export default {
  title: "CardFormPage/CardSecurityCode",
  component: CardSecurityCode,
};

const Template = () => {
  const { cardCode } = useContext(CardInfoContext);
  return <CardSecurityCode cardCode={cardCode} />;
};

export const Primary = Template.bind({});
