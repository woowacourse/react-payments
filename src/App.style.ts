import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 30px;

  width: 376px;
  height: 700px;
  background-color: #fff;

  border-radius: 8px;
  border: 3px solid #000;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ErrorWrapper = styled.div`
  height: 14px;
`;

export const ErrorMessage = styled.span`
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
