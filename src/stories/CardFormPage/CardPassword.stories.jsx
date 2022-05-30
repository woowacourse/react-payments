import React, { useContext, useMemo } from "react";
import CardPassword from "components/pages/CardFormPage/CardPassword";
import { CardInfoContext } from "components/context/CardInfoProvider";

export default {
  title: "CardFormPage/CardPassword",
  component: CardPassword,
  argTypes: {
    pwd: { controls: "object" },
  },
};

const Template = () => {
  const { pwd } = useContext(CardInfoContext);
  const isCorrectPwd = useMemo(
    () => Object.values(pwd).join("").length === 2,
    [pwd]
  );

  return <CardPassword pwd={pwd} isCorrectPwd={isCorrectPwd} />;
};

export const Primary = Template.bind({});
