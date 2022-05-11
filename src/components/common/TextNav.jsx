import React from 'react';
import styled from 'styled-components';
import TextButton from './TextButton';

const TextNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const S = {
  TextNavContainer,
};

function TextNav({ isVisible, handleClick, text }) {
  return (
    <S.TextNavContainer>
      <TextButton hexColor={'#525252'} isVisible={isVisible} handleClick={handleClick}>
        {text}
      </TextButton>
    </S.TextNavContainer>
  );
}

export default React.memo(TextNav);
