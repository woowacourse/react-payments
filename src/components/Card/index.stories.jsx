import Card from "./";

const Template = (args) => <Card {...args} />;

export default {
  title: 'Card',
  component: Card,
};

export const SmallCard = Template.bind({});
SmallCard.args = {
  size:'small',
  company: 'poco', 
  cardNumbers: ['1111','2222', 'oooo','oooo' ],
  owner: 'dory',
  dueMonth: '04', 
  dueDate: '26'
}

export const BigCard = Template.bind({});
BigCard.args = {
  size:'big',
  company: 'poco', 
  cardNumbers: ['1111','2222', 'oooo','1ooo' ],
  owner: 'dory',
  dueMonth: '04', 
  dueDate: '26'
}