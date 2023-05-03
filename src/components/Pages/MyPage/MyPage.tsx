import { useEffect } from 'react';

import { useResetCard } from '../../../hooks/useResetCard';

import * as styled from './MyPage.styled';
import CardBoxList from '../../CardBoxList/CardBoxList';
import RegisterEntryBox from '../../RegisterEntryBox/RegisterEntryBox';

const MyPage = () => {
  const resetCard = useResetCard();

  useEffect(() => {
    resetCard();
  }, []);

  return (
    <styled.MyPageLayout>
      <CardBoxList />
      <RegisterEntryBox />
    </styled.MyPageLayout>
  );
};

export default MyPage;
