import { Route, Routes } from 'react-router-dom';
import Header from '../components/@common/Header/Header';
import CardRegisterPage from '../pages/CardRegister/CardRegisterPage';
import CardAliasPage from '../pages/CardRegister/CardAlias/CardAliasPage';

const CardRegisterRoute = () => (
  <Routes>
    <Route
      path='/'
      element={
        <>
          <Header pageTitle='카드 등록' />
          <CardRegisterPage />
        </>
      }
    />
    <Route path=':alias' element={<CardAliasPage />} />
  </Routes>
);

export default CardRegisterRoute;
