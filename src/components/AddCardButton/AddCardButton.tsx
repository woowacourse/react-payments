import { Link } from "react-router-dom";
import styled from "styled-components";
import { PAGE } from "../../constant/PagePath";

const AddCardButton = () => {
  return (
    <Link to={PAGE.ADD_CARD}>
      <Button type="button">✚</Button>
    </Link>
  );
};

const Button = styled.button`
  height: 123px;
  width: 208px;

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
