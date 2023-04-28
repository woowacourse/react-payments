import { Link } from "react-router-dom";
import styled from "styled-components";

const AddCardButton = () => {
  return (
    <Link to={"/register"}>
      <AddCardButtonBox>+</AddCardButtonBox>
    </Link>
  );
};

const AddCardButtonBox = styled.button`
  width: 213px;
  height: 133px;

  border: none;

  background: #e5e5e5;
  border-radius: 5px;

  font-size: 30px;
  color: #000000;

  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #c4c4c4;
  }
`;

export default AddCardButton;
