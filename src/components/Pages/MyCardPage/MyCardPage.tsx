import { useEffect } from 'react';

import { useResetCardInfo } from '../../../hooks/useResetCardInfo';

import * as styled from './MyCardPage.styled';
import CardList from '../../CardList/CardList';
import CardRegisterButtonContainer from '../../CardRegisterButtonContainer/CardRegisterButtonContainer';

const MyCardPage = () => {
  useEffect(() => {
    useResetCardInfo();
  }, []);

  return (
    <styled.MyCardPage>
      <CardList />
      <CardRegisterButtonContainer />
    </styled.MyCardPage>
  );
};

export default MyCardPage;
