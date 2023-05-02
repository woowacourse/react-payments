import styled from "styled-components";
import { Card } from "../common";
import { Link } from "react-router-dom";

export const EmptyCard = () => {
  return (
    <Link to="/addCard">
      <Card>
        <PlusIcon>+</PlusIcon>
      </Card>
    </Link>
  );
};

const PlusIcon = styled.div`
  text-align: center;

  height: 32px;
  font-size: 30px;
  font-weight: 600;
  color: #575757;
`;
