import styled from 'styled-components';

const HeadContainer = styled.div`
  display: flex;
  padding: 22px 24px 0;
  gap: 18px;
`;

const BackButton = styled.button`
  background-color: #fff;
  border: none;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
`;

function Head({ title }) {
  return (
    <HeadContainer>
      <BackButton>＜</BackButton>
      <Title>{title}</Title>
    </HeadContainer>
  );
}

export default Head;
