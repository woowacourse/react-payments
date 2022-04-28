import Card from "./";

const Template = (args) => <Card {...args} />;

export default {
  title: "Card",
  component: Card,
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  size: "small",
  company: "poco",
  cardNumbers: ["1111", "2222", "oooo", "oooo"],
  owner: "dory",
  dueDate: ["04", "26"],
};

export const BigCard = Template.bind({});
BigCard.args = {
  size: "big",
  company: "poco",
  cardNumbers: ["1111", "2222", "oooo", "1ooo"],
  owner: "dory",
  dueDate: ["04", "26"],
};
