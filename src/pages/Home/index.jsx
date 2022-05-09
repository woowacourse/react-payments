import React, { useCallback } from 'react';

import useAliasModal from '../../hooks/useAliasModal';

import PageTitle from '../../system/PageTitle';

import Cards from './Cards';
import AddButton from './AddButton';

import HomeWrapperStyled from './style';

const Home = () => {
  const [AliasModal, onModal, offModal] = useAliasModal(() => {
    offModal();
  });

  const onClickCard = (card) => useCallback(() => {
    onModal(card);
  }, []);

  return (
    <>
      <HomeWrapperStyled>
        <PageTitle hasPrevButton={false}>보유카드</PageTitle>
        <Cards onClickCard={onClickCard} />
        <AddButton />
      </HomeWrapperStyled>
      <AliasModal />
    </>
  );
};

export default Home;
