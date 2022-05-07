import CardAdd from './pages/CardAdd';
import CardAddComplete from './pages/CardAddComplete';
import CardList from './pages/CardList';

const routes = [
  {
    path: '/',
    element: <CardAdd />,
  },
  {
    path: 'card-add-complete',
    element: <CardAddComplete />,
  },
  {
    path: 'card-list',
    element: <CardList />,
  },
];

export default routes;
