import styled from "styled-components";
import { StaticPropsWithChildren } from "../../types/components";

const FormResultPageLayout = ({ children }: StaticPropsWithChildren) => {
  return <PageLayout>{children}</PageLayout>;
};

export default FormResultPageLayout;

const PageLayout = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
`;
