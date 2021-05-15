import { MESSAGE } from '../../constants';
import ErrorPage from './ErrorPage';

export default {
  title: 'Payments/ErrorPage',
  component: ErrorPage,
  argTypes: {},
};

const Template = (args) => <ErrorPage {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  message: MESSAGE.ERROR_PAGE.DEFAULT,
};
