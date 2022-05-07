import CardAdd from '.';
import { withReactContext } from 'storybook-react-context';
import { UserContext } from '../../context/userContext';
import { initState } from '../../const';

export default {
  title: 'CardAdd',
  component: CardAdd,
  decorators: [
    withReactContext({
      Context: UserContext,
      initialState: initState,
    }),
  ],
};

export const cardAdd = () => <CardAdd />;
