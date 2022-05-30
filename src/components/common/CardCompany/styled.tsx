import styled from "styled-components";
import { LABEL_PRIMARY_COLOR } from "style";

interface CompanyColorCircleProps {
  hexColor: string;
}

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CompanyColorCircle = styled.div<CompanyColorCircleProps>`
  background-color: ${(props) => props.hexColor};
  width: 40px;
  height: 40px;
  border-radius: 50%;

  &:hover {
    background-color: ${(props) => `${props.hexColor}cc`};
  }
`;

const CompanyName = styled.p`
  margin: 0;
  padding: 8px;
  color: ${LABEL_PRIMARY_COLOR};
`;

export { CompanyContainer, CompanyColorCircle, CompanyName };
