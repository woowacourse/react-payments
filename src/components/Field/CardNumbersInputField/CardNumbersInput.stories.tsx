import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";

import CardNumbersInputField from "./CardNumbersInputField";

export default {
  title: "Field/CardNumbersInputField",
  component: CardNumbersInputField,
} as Meta;

const Template: StoryFn = (args) => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(["", "", "", ""]);
  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>([
    false,
  ]);
  const [isOpenForm, setIsOpenForm] = useState<boolean[]>([false]);

  return (
    <CardNumbersInputField
      {...args}
      cardNumbers={cardNumbers}
      setCardNumbers={setCardNumbers}
      isCompletedSections={isCompletedSections}
      setIsCompletedSections={setIsCompletedSections}
      isOpenForm={isOpenForm}
      setIsOpenForm={setIsOpenForm}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
