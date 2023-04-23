import { Outlet } from 'react-router-dom';
import Layout from './components/@common/Layout';

const App = () => {
  return (
    <>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </>
  );
};

export default App;
