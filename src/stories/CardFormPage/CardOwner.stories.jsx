import React, { useContext } from "react";
import CardOwner from "components/pages/CardFormPage/CardOwner";
import { CardInfoContext } from "components/context/CardInfoProvider";

export default {
  title: "CardFormPage/CardOwner",
  component: CardOwner,
};

const Template = () => {
  const { owner } = useContext(CardInfoContext);
  return <CardOwner owner={owner} />;
};

export const Primary = Template.bind({});
