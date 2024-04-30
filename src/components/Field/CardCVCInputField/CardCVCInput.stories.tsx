import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";

import CardCVCInputField from "./CardCVCInputField";

export default {
  title: "Field/CardCVCInputField",
  component: CardCVCInputField,
} as Meta;

const Template: StoryFn = (args) => {
  const [cardCVC, setCardCVC] = useState<string>("");
  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>([
    false,
  ]);
  const [isOpenForm, setIsOpenForm] = useState<boolean[]>([false]);
  const [_, setIsCardPreviewFront] = useState<boolean>(true);

  return (
    <CardCVCInputField
      {...args}
      cardCVC={cardCVC}
      setCardCVC={setCardCVC}
      isCompletedSections={isCompletedSections}
      setIsCompletedSections={setIsCompletedSections}
      isOpenForm={isOpenForm}
      setIsOpenForm={setIsOpenForm}
      setIsCardPreviewFront={setIsCardPreviewFront}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
