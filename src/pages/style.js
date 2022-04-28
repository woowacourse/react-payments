import styled from "styled-components";

const PageWrapper = styled.div`
  height: 701px;
  width: 375px;
  background-color: white;
  padding: 25px;
`;

const HeaderWrapper = styled.div`
  display: flex;

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
`;

const Dot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CVCWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export {
  PageWrapper,
  HeaderWrapper,
  CardWrapper,
  PasswordWrapper,
  OwnerHeader,
  Dot,
  CVCWrapper,
};
