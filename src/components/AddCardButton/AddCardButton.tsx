import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTE_PATH from "../../constants/routePath";
import Button from "../@common/Button/Button";

const AddCardButton = () => {
  return (
    <Link to={ROUTE_PATH.addCard}>
      <NavigateButton type="button">✚</NavigateButton>
    </Link>
  );
};

const NavigateButton = styled(Button)`
  width: 250px;
  height: 150px;
  background-color: var(--color-pale);
  box-shadow: 5px 5px 5px #adadad;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(2px, 2px);
  }
`;

export default AddCardButton;
