import CardAppPage from 'page/cardAdd';
import CardAddConfirmPage from 'page/cardAddConfirm';

const routes = [
  { path: '/', element: <CardAppPage /> },
  { path: '/confirm', element: <CardAddConfirmPage /> },
];

export default routes;
