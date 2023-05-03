import { useEffect } from 'react';

import { useResetCard } from '../../../hooks/useResetCard';

import * as styled from './MyPage.styled';
import CardBoxList from '../../CardBoxList/CardBoxList';
import RegisterEntrySection from '../../RegisterEntrySection/RegisterEntrySection';

const MyPage = () => {
  const resetCard = useResetCard();

  useEffect(() => {
    resetCard();
  }, []);

  return (
    <styled.MyPageLayout>
      <CardBoxList />
      <RegisterEntrySection />
    </styled.MyPageLayout>
  );
};

export default MyPage;
