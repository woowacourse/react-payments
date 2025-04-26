import styled from '@emotion/styled';

export const CardAddFrom = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 32px;
  height: calc(100vh - 392px);
  overflow-y: auto;
`;

export const CardAddFromButtonWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 480px;
`;
