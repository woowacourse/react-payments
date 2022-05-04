import { useRoutes } from 'react-router-dom';
import Layout from 'components/common/Layout';

import routes from 'routes';

const App = () => {
  const element = useRoutes(routes);

  return <Layout>{element}</Layout>;
};

export default App;
