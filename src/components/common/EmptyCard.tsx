import styled from "styled-components";

interface EmptyCardProps {
  backgroundColor?: string;
}

export default function EmptyCard({
  backgroundColor = "lightGrey",
}: EmptyCardProps) {
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
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const PlusIcon = styled.div`
  text-align: center;

  height: 32px;
  font-size: 30px;
  font-weight: 600;
  /* color: ${(props) => props.theme.color.grey4}; */
`;
