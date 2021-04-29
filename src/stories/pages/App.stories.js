import App from '../../App';

export default {
  title: 'Pages/App',
  component: App,
};

const Template = args => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};
