import { Link } from "react-router-dom";
import styled from "styled-components";

const CardAddLink = styled(Link)`
  width: 208px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.cardText};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;

  text-align: center;
  text-decoration: none;
  font-size: 50px;
  background: ${({ theme }) => theme.colors.cardAddLink};
  &:hover {
    background: ${({ theme }) => theme.colors.twitterBlue};
    color: white;
  }
`;

export default CardAddLink;
