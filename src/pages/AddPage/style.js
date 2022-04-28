import styled from "styled-components";

const PageWrapper = styled.div`
  height: 700px;
  width: 375px;
  background-color: white;
  padding: 25px;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  & h2 {
    font-size: 16px;
    margin-left: 15px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
`;

const PasswordWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const OwnerHeader = styled.div`
  display: flex;
  justify-content: space-between;

  & div {
    font-size: 12px;
    margin-bottom: 10px;
    display: inline-block;
    color: #525252;
  }
`;

const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  color: ${({ theme }) => theme.colors.MINT};
  font-size: 18px;
  font-weight: 500;
`;

const CVCWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FormWrapper = styled.div`
  margin-bottom: 15px;

  & label {
    font-size: 12px;
    margin-bottom: 10px;
    display: inline-block;
    color: ${({ theme }) => theme.colors.DARK_GRAY};
  }
`;

export {
  PageWrapper,
  HeaderWrapper,
  CardWrapper,
  PasswordWrapper,
  OwnerHeader,
  Dot,
  CVCWrapper,
  FooterWrapper,
  FormWrapper,
};
