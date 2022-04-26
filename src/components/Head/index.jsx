import styled from 'styled-components';

const HeadSection = styled.section`
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
    <HeadSection>
      <BackButton>＜</BackButton>
      <Title>{title}</Title>
    </HeadSection>
  );
}

export default Head;
