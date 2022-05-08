import Circle from './Circle';

export default {
  title: 'components/Circle',
  component: Circle,
};

const Template = (args) => <Circle {...args} />;

export const CardCompany = Template.bind({});
CardCompany.args = {
  size: '37px',
  color: '#000',
};

export const CardPassword = Template.bind({});
CardPassword.args = {
  size: '5px',
  color: '#000',
};
