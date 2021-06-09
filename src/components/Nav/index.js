import React from 'react';
import { NavWrapper, BackButton, NavText } from './index.styles';

const Nav = () => {
  return (
    <NavWrapper>
      <BackButton />
      <NavText>카드 추가</NavText>
    </NavWrapper>
  );
};

export default Nav;
