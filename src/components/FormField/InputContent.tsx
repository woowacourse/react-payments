import styled from "styled-components";
import { StaticPropsWithChildren } from "../../types/components";

const InputContent = ({ children }: StaticPropsWithChildren) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default InputContent;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 8px;
  margin-bottom: 4px;
`;
