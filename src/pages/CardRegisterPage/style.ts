import styled from "styled-components";

const CardRegisterWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const FlexWrapper = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const S = {
  CardRegisterWrapper,
  FlexWrapper,
};

export default S;
