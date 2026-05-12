import type { ReactNode } from "react";

import styled from "styled-components";

const CardRegisterStep = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  width: 100%;
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;

const Description = styled.span`
  font-size: 9.5px;
  font-weight: 400;
  color: #8b95a1;
`;

export default CardRegisterStep;
