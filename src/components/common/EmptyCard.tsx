import styled from "styled-components";

interface Props {
  backgroundColor: string;
}

export default function EmptyCard({ backgroundColor }: Props) {
  return (
    <CardWrapper backgroundColor={backgroundColor}>
      <PlusIcon>+</PlusIcon>
    </CardWrapper>
  );
}

const CardWrapper = styled.div<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 123px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;

  margin: 0 auto;
`;

const PlusIcon = styled.div`
  text-align: center;

  height: 32px;
  font-size: 30px;
  font-weight: 600;
`;
