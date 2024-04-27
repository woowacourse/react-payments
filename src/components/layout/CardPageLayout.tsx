import styled from "styled-components";

import { StaticPropsWithChildren } from "../../types/components";

const CardPageLayout = ({ children }: StaticPropsWithChildren) => {
  return <Layout>{children}</Layout>;
};

export default CardPageLayout;

const Layout = styled.div`
  padding: 0px 30px 0px 31px;
  width: 315px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;
  border-radius: 8px;
  overflow-y: scroll;
`;
