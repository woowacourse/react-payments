import React from 'react';
import styled from 'styled-components';
import TextButton from './TextButton';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

function Footer({ isAllCompleted }) {
  return (
    <FooterContainer>
      <TextButton
        hexColor={'#525252'}
        isVisible={isAllCompleted}
        handleClick={() => alert('카드 등록이 완료 되었습니다 :D')}>
        다음
      </TextButton>
    </FooterContainer>
  );
}

export default Footer;
