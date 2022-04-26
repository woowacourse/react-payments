import Card from "./Card";

const Template = (args) => <Card {...args} />;

export default {
  title: 'Card',
  component: Card,
};

export const PocoCard = Template.bind({});
PocoCard.args = {
  company: 'poco', 
  firstNumber: '1111',
  secondNumber: '2222', 
  thirdNumber: 'oooo', 
  fourthNumber: 'oooo', 
  owner: 'dory',
  dueMonth: '04', 
  dueDate: '26'
}