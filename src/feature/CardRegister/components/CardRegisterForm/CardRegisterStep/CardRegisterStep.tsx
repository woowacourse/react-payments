import type { ReactNode } from "react";
import Description from "../../../../../common/components/Description/Description";
import Title from "../../../../../common/components/Title/Title";
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
      <Title value={title} />
      {description && <Description value={description} />}
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

export default CardRegisterStep;
