import Card from ".";

const Template = (args) => <Card {...args} />;

export default {
  title: "component/common/Card",
  component: Card,
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  size: "small",
  company: "poco",
  cardNumbers: ["1111", "2222", "oooo", "oooo"],
  owner: "dory",
  dueMonth: "04",
  dueYear: "26",
  onClick: () => {},
};

export const BigCard = Template.bind({});
BigCard.args = {
  size: "big",
  company: "poco",
  cardNumbers: ["1111", "2222", "oooo", "1ooo"],
  owner: "dory",
  dueMonth: "04",
  dueYear: "26",
  onClick: () => {},
};
