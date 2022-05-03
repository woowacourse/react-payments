import styled from "styled-components";

const PageWrapper = styled.div`
  height: 700px;
  width: 375px;
  background-color: white;
  padding: 25px;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
`;

const CardInputWrapper = styled.div`
  margin-bottom: 15px;

  & label {
    font-size: 12px;
    margin-bottom: 10px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.DARK_GRAY};
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export { PageWrapper, CardWrapper, FooterWrapper, CardInputWrapper };
