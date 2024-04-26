import { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import CardExpirationDateInputField from "./CardExpirationDateInputField";

export default {
  title: "Field/CardExpirationDateInputField",
  component: CardExpirationDateInputField,
} as Meta;

// CardExpirationDateInputFieldProps를 사용하여 args의 타입을 명시합니다.
const Template: StoryFn = (args) => {
  const [date, setDate] = useState<Record<string, string>>({
    month: "",
    year: "",
  });
  const [isCompletedSections, setIsCompletedSections] = useState([false]);
  const [isOpenForm, setIsOpenForm] = useState([false]);

  return (
    <CardExpirationDateInputField
      {...args}
      date={date}
      setDate={setDate}
      isCompletedSections={isCompletedSections}
      setIsCompletedSections={setIsCompletedSections}
      isOpenForm={isOpenForm}
      setIsOpenForm={setIsOpenForm}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
