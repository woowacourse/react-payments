import styled from '@emotion/styled';

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  position: relative;
`;

const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  width: inherit;
  max-width: inherit;
  min-width: inherit;
`;

export { StyledCardPage, ButtonContainer };
