import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface HeadProps {
  link?: string;
  children: ReactNode;
}

function Head({ link, children }: HeadProps) {
  const navigator = useNavigate();

  return (
    <HeadContainer>
      {link && <BackButton onClick={() => navigator(link)}>＜</BackButton>}
      <Title>{children}</Title>
    </HeadContainer>
  );
}

export default Head;

const HeadContainer = styled.div`
  display: flex;
  padding: 22px 24px 0;
  gap: 18px;
`;

const BackButton = styled.button`
  background-color: #fff;
`;

const Title = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #383838;
`;
