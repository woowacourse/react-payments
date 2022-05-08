import styled from 'styled-components';

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 22px 24px 0;
`;

function Head({ leftComponent, rightComponent }) {
  return (
    <HeadContainer>
      {leftComponent}
      {rightComponent}
    </HeadContainer>
  );
}

export default Head;
