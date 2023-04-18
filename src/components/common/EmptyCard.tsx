import styled from "styled-components";

export default function EmptyCard() {
  return (
    <CardWrapper>
      <PlusIcon>+</PlusIcon>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 123px;
  background-color: ${(props) => props.theme.color.grey2};
  border-radius: 5px;
`;

const PlusIcon = styled.div`
  text-align: center;

  height: 32px;
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.color.grey4};
`;
