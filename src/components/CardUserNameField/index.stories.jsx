import Card from '.';
import 'index.css';

export default {
  title: 'Component/UserName',
  component: UserName,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <UserName {...args} />;

export const Compy = Template.bind({});
Compy.args = {
  userName: '류콤피',
};
