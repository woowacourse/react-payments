import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px 0 31px;

  width: 382px;
  height: 700px;
  background-color: #fff;

  border-radius: 8px;
  border: 3px solid #000;
`;

export const CardPreviewWrapper = styled.div`
  width: 100%;
  padding: 77px 0 45px 0px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;

  gap: 16px;

  height: 438px;
  overflow-y: auto;
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
