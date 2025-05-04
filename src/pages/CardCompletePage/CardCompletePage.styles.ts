import styled from '@emotion/styled';

const StyledIcon = styled.img`
  width: 76px;
  height: 76px;
  margin: 20px;
`;

const StyledCardCompletePage = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #353c49;
  margin-bottom: 30px;
  text-align: center;
`;

export { StyledIcon, StyledCardCompletePage, StyledTitle };
