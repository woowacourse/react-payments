import { Route, Routes } from 'react-router-dom';
import Header from '../components/@common/Header/Header';
import CardRegister from '../pages/CardRegister/CardRegister';
import CardAlias from '../pages/CardRegister/CardAlias/CardAlias';

const CardRegisterRoute = () => (
  <Routes>
    <Route
      path='/'
      element={
        <>
          <Header pageTitle='카드 등록' />
          <CardRegister />
        </>
      }
    />
    <Route path=':alias' element={<CardAlias />} />
  </Routes>
);

export default CardRegisterRoute;
