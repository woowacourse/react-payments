import styled from "styled-components";

interface CardProps {
  $backgroundColor?: string;
  children: React.ReactNode;
}

export default function Card({ $backgroundColor = "lightGrey", children }: CardProps) {
  return <CardWrapper $backgroundColor={$backgroundColor}>{children}</CardWrapper>;
}

const CardWrapper = styled.div<{ $backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 123px;
  background-color: ${(props) => props.$backgroundColor};
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
