import styled from "styled-components";

const PageWrapper = styled.div`
  height: 700px;
  width: 375px;
  background-color: white;
  padding: 25px;
  position: relative;
`;

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
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

const CardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Test = styled.div`
  margin-top: 40px;
  height: 600px;
  overflow: scroll;
`;

const CardAddWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 208px;
  height: 130px;
  padding: 14px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.GRAY};
  border-radius: 5px;
  font-size: 40px;
  cursor: pointer;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export {
  PageWrapper,
  CardWrapper,
  CardListWrapper,
  CardAddWrapper,
  FooterWrapper,
  CardInputWrapper,
  Test,
};
