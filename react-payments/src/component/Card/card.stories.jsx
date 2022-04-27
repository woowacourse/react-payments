import Card from "./card.component";

export default {
  title: "Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  cardNumbers: ["1111", "2345", "3456", "4567"],
  name: "SMING",
  month: "09",
  year: "99",
};

export const IncompleteCard = Template.bind({});
IncompleteCard.args = {
  cardNumbers: ["1111", "2345", "345", ""],
  name: "UYEON",
  month: "05",
  year: "00",
};
