import styled from "styled-components";
import { StaticPropsWithChildren } from "../../../types/components";

const CardBody = ({ children }: StaticPropsWithChildren) => {
  return <StyledCardBody>{children}</StyledCardBody>;
};

export default CardBody;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 17px;
  row-gap: 8px;
`;
