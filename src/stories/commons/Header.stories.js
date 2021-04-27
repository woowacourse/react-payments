import { Header } from '../../components/commons/header/Header';

export default {
  title: 'Commons/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '헤더',
};
