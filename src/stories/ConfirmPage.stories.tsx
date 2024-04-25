import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';
import ConfirmPage from '../pages/confirm/ConfirmPage';

export default {
  title: 'Confirm Page',
  render: () => <ConfirmPage />,
  decorators: [withRouter],
};

export const FromHomePage = {
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        state: { isSucceed: true, cardNumbers: '1234', cardIssuer: '국민카드' },
      },
      routing: {
        path: '/',
        handle: 'Home',
      },
    }),
  },
};
