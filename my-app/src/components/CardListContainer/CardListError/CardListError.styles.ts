import styled from '@emotion/styled';

export const ErrorListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const ErrorIcon = styled.img`
  width: 64px;
  height: 64px;
`;

export const ErrorTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #353c49;
`;

export const ErrorDescription = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;
