import { useEffect } from 'react';

import { useInitCard } from '../../../hooks/useInitCard';

import * as styled from './MyPage.styled';
import CardBoxList from '../../CardBoxList/CardBoxList';
import RegisterEntryBox from '../../RegisterEntryBox/RegisterEntryBox';

const MyPage = () => {
  const resetCard = useInitCard();

  useEffect(() => {
    resetCard();
  }, [resetCard]);

  return (
    <styled.MyPageLayout>
      <CardBoxList />
      <RegisterEntryBox />
    </styled.MyPageLayout>
  );
};

export default MyPage;
