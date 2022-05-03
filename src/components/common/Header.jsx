import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const Title = styled.span`
  padding: 0 8px;
  margin: 0;
  font-size: 1.5rem;
`;

function Header({ children: title }) {
  return (
    <HeaderContainer>
      <IoIosArrowBack
        size={30}
        color={'#525252'}
        onClick={() => alert('아직 구현되지 않았습니다 :(')}
        style={{ cursor: 'pointer' }}
      />
      <Title>{title}</Title>
    </HeaderContainer>
  );
}

export default Header;
