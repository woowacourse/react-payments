import { Link } from "react-router-dom";
import styled from "styled-components";

const AddCardButton = () => {
  return (
    <Link to="/addCard">
      <Button>✚</Button>
    </Link>
  );
};

const Button = styled.button`
  height: 123px;
  width: 208px;

  border: none;

  background-color: #e5e5e5;

  border-radius: 5px;

  cursor: pointer;
`;
export default AddCardButton;
