import { styled } from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px;
  width: 376px;
  height: 680px;
  overflow: scroll;
  position: relative;
`;

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ErrorContainer = styled.div`
  height: 14px;
`;

export const ErrorMessageSpan = styled.span`
  color: #ff3d3d;

  font-size: 0.5938rem;
  font-weight: 400;
  line-height: 0.875rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0;
  left: 0;
  width: 376px;
  margin: 17px auto;
  height: 52px;
`;
