import styled from "styled-components";
import { StaticPropsWithChildren } from "../../types/components";

import CardPageLayout from "./CardPageLayout";

const FormResultPageLayout = ({ children }: StaticPropsWithChildren) => {
  return (
    <CardPageLayout>
      <PageLayout>{children}</PageLayout>
    </CardPageLayout>
  );
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
