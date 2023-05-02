import Card from "../common/Card";
import styled from "styled-components";

import { Link } from "react-router-dom";

const EmptyCard = () => {
  return (
    <Link to="/addCard">
      <Container>
        <Card>
          <PlusIcon>+</PlusIcon>
        </Card>
      </Container>
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

const Container = styled.div`
  height: 125px;
  margin-bottom: 46px;
`;

export default EmptyCard;
