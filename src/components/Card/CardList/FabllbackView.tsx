import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
  action: {
    label: string;
    onClick: () => void;
  };
}

export default function FallbackView({ icon, title, description, action }: Props) {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <HintText>{description}</HintText>
      <RegisterButton onClick={action.onClick}>{action.label}</RegisterButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 320px;
  height: 330px;
  padding-top: 100px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.strong`
  font-size: 20px;
  font-weight: 700;
  color: #353c49;
`;

const HintText = styled.strong`
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;

const RegisterButton = styled.button`
  width: 320px;
  min-height: 44px;
  border-radius: 5px;
  background-color: #333;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
`;
