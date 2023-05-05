import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTE_PATH from "../../constants/routePath";

const AddCardButton = () => {
  return (
    <Link to={ROUTE_PATH.addCard}>
      <Button>✚</Button>
    </Link>
  );
};

const Button = styled.button`
  width: 248px;
  height: 150px;

  border: none;
  border-radius: 5px;

  background-color: #e5e5e5;

  box-shadow: 5px 5px 5px #adadad;

  transition: all 0.3s ease;

  &:hover {
    transform: translate(2px, 2px);
  }

  cursor: pointer;
`;
export default AddCardButton;
