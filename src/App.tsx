import { Outlet } from 'react-router-dom';
import Layout from './components/@common/Layout';
import Header from './components/@common/Header';

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
