import { StoryFn, Meta } from "@storybook/react";
import { CardInputForm } from "../components";
import { CardInputFormType } from "../components/CardInputForm";
import { useCard } from "../hooks";

export default {
  title: "CardInputForm",
  component: CardInputForm,
} as Meta<CardInputFormType>;

const Template: StoryFn<CardInputFormType> = (props) => {
  const [card, setNewCard] = useCard();

  return (
    <CardInputForm card={card} setNewCard={setNewCard} onSubmit={() => {}} />
  );
};

export const CardForm = Template.bind({});
