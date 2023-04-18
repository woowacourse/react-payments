import styled from "styled-components";
import Card from "./common/Card";

export const EmptyCard = () => {
  return (
    <Card>
      <PlusIcon>+</PlusIcon>
    </Card>
  );
};

const PlusIcon = styled.div`
  text-align: center;

  height: 32px;
  font-size: 30px;
  font-weight: 600;
  color: #575757;

  /* color: ${(props) => props.theme.color.grey4}; */
`;
