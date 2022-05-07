import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TextButton from './TextButton';

const TextNavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const S = {
  TextNavContainer,
};

function TextNav({ isAllCompleted }) {
  const navigate = useNavigate();

  const handleClick = () => {
    alert('카드 등록이 완료 되었습니다 :D');
    navigate('/card-add-complete');
  };
  return (
    <S.TextNavContainer>
      <TextButton hexColor={'#525252'} isVisible={isAllCompleted} handleClick={handleClick}>
        다음
      </TextButton>
    </S.TextNavContainer>
  );
}

export default React.memo(TextNav);
