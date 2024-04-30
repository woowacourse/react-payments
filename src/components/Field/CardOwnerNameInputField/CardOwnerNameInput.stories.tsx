import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";

import CardOwnerNameInputField from "./CardOwnerNameInputField";

export default {
  title: "Field/CardOwnerNameInputField",
  component: CardOwnerNameInputField,
} as Meta;

const Template: StoryFn = (args) => {
  const [ownerName, setOwnerName] = useState<string>("");
  const [isCompletedSections, setIsCompletedSections] = useState<boolean[]>([
    false,
  ]);
  const [isOpenForm, setIsOpenForm] = useState<boolean[]>([false]);

  return (
    <CardOwnerNameInputField
      {...args}
      ownerName={ownerName}
      setOwnerName={setOwnerName}
      isCompletedSections={isCompletedSections}
      setIsCompletedSections={setIsCompletedSections}
      isOpenForm={isOpenForm}
      setIsOpenForm={setIsOpenForm}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
