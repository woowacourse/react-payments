import styled from "styled-components";
import { Card } from "../CardContent/CardContent.styles";

export const CardRegisterButton = styled(Card)`
  position: relative;
  background: #e5e5e5;
  cursor: pointer;

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 1rem;
    height: 3px;
    background-color: #333333;
  }

  ::before {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ::after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:hover {
    opacity: 0.8;
  }
`;
