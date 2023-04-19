import { ReactNode } from "react";
import styled from "styled-components";

interface PageType {
  children: ReactNode;
}

const Page = (props: PageType) => {
  return <PageWrapper>{props.children}</PageWrapper>;
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: white;
  padding: 100px;
`;

export default Page;
