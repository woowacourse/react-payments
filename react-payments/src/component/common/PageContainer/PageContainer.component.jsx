import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 850px;
  border: 1px solid ${({ theme }) => theme.colors.pageDefault};
  padding: 20px 15px;
`;

export default PageContainer;
