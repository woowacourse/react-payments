import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";

import CardPasswordInput from "./CardPasswordInput";

export default {
  title: "Field/CardPasswordInput",
  component: CardPasswordInput,
} as Meta;

const Template: StoryFn = (args) => {
  const [cardPassword, setCardPassword] = useState<string>("");
  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>([
    false,
  ]);

  return (
    <CardPasswordInput
      {...args}
      cardPassword={cardPassword}
      setCardPassword={setCardPassword}
      isCompletedSections={isCompletedSections}
      setIsCompletedSections={setIsCompletedSections}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
